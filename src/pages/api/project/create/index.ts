import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { ProjectService } from "@/lib/services/projectService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { createProjectSchema } from "@/schemas/createProjectSchema";
import { NextApiRequest, NextApiResponse } from "next/types";

export default authMiddleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectService = new ProjectService();

  if (req.method === "POST") {
    try {
      const validation = createProjectSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const project = await projectService.createProject(validation.data);

      res.status(200).json(successResponse(project));
    } catch (error) {
      errorResponse("Internal server error", 500);
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
});
