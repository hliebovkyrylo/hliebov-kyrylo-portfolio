import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { EducationService } from "@/lib/services/educationService";
import { errorResponse } from "@/lib/utils/apiResponse";
import { createEducationSchema } from "@/schemas/createEducationSchema";
import { NextApiRequest, NextApiResponse } from "next/types";

export default authMiddleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const educationService = new EducationService();

  if (req.method === "POST") {
    try {
      const validation = createEducationSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const education = await educationService.createEducation(validation.data);

      return res.status(200).json(education);
    } catch (error) {
      return res.status(500).end(errorResponse("Internal Server Error", 500));
    }
  } else {
    return res.status(405).end(errorResponse("Method not allowed", 405));
  }
});
