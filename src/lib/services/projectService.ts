import { CreateProjectInput } from "@/schemas/createProjectSchema";
import prisma from "../utils/db";
import { NotFoundError } from "../errors";
import { UpdateProjectInput } from "@/schemas/updateProjectSchema";

export class ProjectService {
  async createProject(data: CreateProjectInput) {
    return prisma.project.create({
      data,
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

  async deleteProject(id: string) {
    try {
      return prisma.project.delete({
        where: {
          id: id,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new NotFoundError("Project not found");
      }
    }
  }

  async getProjects() {
    return prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getProjectById(id: string) {
    try {
      return prisma.project.findUnique({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new NotFoundError("Project not found");
      }
    }
  }
}
