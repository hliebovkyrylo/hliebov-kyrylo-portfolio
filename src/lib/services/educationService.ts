import { CreateEducationInput } from "@/schemas/createEducationSchema";
import prisma from "../utils/db";
import { UpdateEducationInput } from "@/schemas/updateEducationSchema";
import { NotFoundError } from "../errors";

export class EducationService {
  async createEducation(data: CreateEducationInput) {
    return prisma.education.create({
      data: data,
    });
  }

  async updateEducation(id: string, data: UpdateEducationInput) {
    try {
      return prisma.education.update({
        where: {
          id: id,
        },
        data: data,
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new NotFoundError("Education not found");
      }
    }
  }

  async deleteEducation(id: string) {
    try {
      return prisma.education.delete({
        where: {
          id: id,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new NotFoundError("Education not found");
      }
    }
  }

  async getEducations() {
    return prisma.education.findMany();
  }

  async getEducationById(educationId: string) {
    try {
      return prisma.education.findUnique({
        where: {
          id: educationId,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new NotFoundError("Education not found");
      }
    }
  }
}
