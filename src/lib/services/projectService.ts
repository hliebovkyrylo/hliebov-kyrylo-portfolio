import { CreateProjectInput } from "@/schemas/createProjectSchema";
import prisma from "../utils/db";
import { NotFoundError } from "../errors";
import { UpdateProjectInput } from "@/schemas/updateProjectSchema";

export class ProjectService {
  async createProject(data: CreateProjectInput) {
    return prisma.project.create({
      data: {
        imageUrl: data.imageUrl,
        name: data.name,
        url: data.link,
        description: data.description,
        tags: data.tags,
      },
    });
  }

  async updateProject(id: string, data: UpdateProjectInput) {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (!project) {
      throw new NotFoundError("Project not found");
    }

    return prisma.project.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
