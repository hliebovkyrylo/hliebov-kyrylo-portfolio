import { ProjectService } from "@/lib/services/projectService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { updateProjectSchema } from "@/schemas/updateProjectSchema";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectService = new ProjectService();

  if (req.method === "PUT") {
    const { projectId } = req.query;

    const validation = updateProjectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json(errorResponse("Invalid body", 400));
    }

    try {
      const project = await projectService.updateProject(
        projectId as string,
        validation.data
      );

      return res.status(200).json(successResponse(project));
    } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    return res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
