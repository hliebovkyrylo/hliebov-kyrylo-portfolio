import { NotFoundError } from "@/lib/errors";
import { EducationService } from "@/lib/services/educationService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const educationService = new EducationService();

  if (req.method === "GET") {
    try {
      const { educationId } = req.query;

      const education = await educationService.getEducationById(
        educationId as string
      );

      res.status(200).json(successResponse(education));
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json(errorResponse("Education not found", 404));
      }

      res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    res.status(409).json(errorResponse("Method not allowed", 409));
  }
}
