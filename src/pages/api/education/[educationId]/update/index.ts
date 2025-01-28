import { NotFoundError } from "@/lib/errors";
import { EducationService } from "@/lib/services/educationService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { updateEducationSchema } from "@/schemas/updateEducationSchema";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const educationService = new EducationService();

  if (req.method === "PUT") {
    try {
      const { educationId } = req.query;

      const validation = updateEducationSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const updatedEducation = await educationService.updateEducation(
        educationId as string,
        validation.data
      );

      res.status(200).json(successResponse(updatedEducation));
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json(errorResponse("Education not found", 404));
      }

      res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
