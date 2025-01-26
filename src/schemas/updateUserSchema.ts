import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  position: z.string().min(1).optional(),
  smallDescription: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
