import { CreateProjectInput } from "@/schemas/createProjectSchema";
import prisma from "../utils/db";

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
}
