import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { UserService } from "@/lib/services/userService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { updateUserSchema } from "@/schemas/updateUserSchema";
import { NextApiRequest, NextApiResponse } from "next";

export default authMiddleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userService = new UserService();

  try {
    if (req.method === "PUT") {
      const validate = updateUserSchema.safeParse(req.body);

      if (!validate.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const updatedUser = await userService.updateUser(
        validate.data,
        req.userId as string
      );

      return res.status(200).json(successResponse(updatedUser));
    } else {
      return res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", 500));
  }
});
