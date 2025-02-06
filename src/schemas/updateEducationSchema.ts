import { z } from "zod";

export const updateEducationSchema = z.object({
  name: z.string().min(1).optional(),
  years: z.string().min(1).optional(),
  specialization: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export type UpdateEducationInput = z.infer<typeof updateEducationSchema>;
