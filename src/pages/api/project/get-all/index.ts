import { ProjectService } from "@/lib/services/projectService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectService = new ProjectService();

  if (req.method === "GET") {
    try {
      const projects = await projectService.getProjects();

      res.status(200).json(successResponse(projects));
    } catch (error) {
      return res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    return res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
