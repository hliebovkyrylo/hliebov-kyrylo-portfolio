import { NotFoundError } from "@/lib/errors";
import { ProjectService } from "@/lib/services/projectService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectService = new ProjectService();

  if (req.method === "GET") {
    const { projectId } = req.query;

    try {
      const project = await projectService.getProjectById(projectId as string);

      res.status(200).json(successResponse(project));
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json(errorResponse(error.message, 404));
      }

      res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
