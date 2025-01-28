import { CreateEducationInput } from "@/schemas/createEducationSchema";
import prisma from "../utils/db";

export class EducationService {
  async createEducation(data: CreateEducationInput) {
    return prisma.education.create({
      data: data,
    });
  }
}
