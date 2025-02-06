import { ConflictError } from "@/lib/errors";
import { AuthService } from "@/lib/services/authService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { signInSchema } from "@/schemas/signInSchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authService = new AuthService();

  try {
    if (req.method === "POST") {
      const validation = signInSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const token = await authService.signIn(validation.data);
      res.status(200).json(successResponse(token));
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    if (error instanceof ConflictError) {
      return res.status(409).json(errorResponse(error.message, 409));
    }

    res.status(500).json(errorResponse("Internal server error", 500));
  }
}
