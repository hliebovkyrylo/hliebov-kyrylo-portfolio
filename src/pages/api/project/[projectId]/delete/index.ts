import { ProjectService } from "@/lib/services/projectService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectService = new ProjectService();

  if (req.method === "DELETE") {
    const { projectId } = req.query;

    try {
      await projectService.deleteProject(projectId as string);

      return res
        .status(200)
        .json(successResponse("Project deleted successfully"));
    } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    return res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
