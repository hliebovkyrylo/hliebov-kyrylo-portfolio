import { NotFoundError } from "@/lib/errors";
import { UserService } from "@/lib/services/userService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

const USER_EMAIL = process.env.USER_EMAIL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userService = new UserService();

  try {
    if (req.method === "GET") {
      const user = await userService.getUserByEmail(USER_EMAIL);
      return res.status(200).json(successResponse(user));
    } else {
      return res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json(errorResponse(error.message, 400));
    }

    return res.status(500).json(errorResponse("Internal server error", 500));
  }
}
