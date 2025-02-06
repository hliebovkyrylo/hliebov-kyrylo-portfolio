import { z } from "zod";

export const createEducationSchema = z.object({
  name: z.string(),
  years: z.string(),
  specialization: z.string(),
  description: z.string(),
});

export type CreateEducationInput = z.infer<typeof createEducationSchema>;
