import { NotFoundError } from "@/lib/errors";
import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { EducationService } from "@/lib/services/educationService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default authMiddleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const educationService = new EducationService();

  if (req.method === "DELETE") {
    const { educationId } = req.query;

    try {
      await educationService.deleteEducation(educationId as string);

      res.status(200).json(successResponse("Education deleted"));
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json(errorResponse("Education not found", 404));
      }

      res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
});
