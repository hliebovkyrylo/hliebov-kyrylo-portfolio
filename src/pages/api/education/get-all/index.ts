import { EducationService } from "@/lib/services/educationService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const educationService = new EducationService();

  if (req.method === "GET") {
    try {
      const educations = await educationService.getEducations();

      res.status(200).json(successResponse(educations));
    } catch (error) {
      res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
