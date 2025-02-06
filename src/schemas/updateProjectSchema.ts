import { z } from "zod";

export const updateProjectSchema = z.object({
  imageUrl: z.string().url().optional(),
  name: z.string().min(0).optional(),
  link: z.string().url().optional(),
  description: z.string().min(1).optional(),
  tags: z.string().min(1).optional(),
});

export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
