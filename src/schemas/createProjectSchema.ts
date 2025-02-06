import { z } from "zod";

export const createProjectSchema = z.object({
  imageUrl: z.string().url(),
  name: z.string().min(1),
  link: z.string().url(),
  description: z.string().min(1),
  tags: z.string().min(1),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
