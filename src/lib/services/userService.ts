import { UserDTO } from "../dtos/user";
import { NotFoundError } from "../errors";
import prisma from "../utils/db";
import { UpdateUserInput } from "@/schemas/updateUserSchema";

export class UserService {
  async getUserByEmail(email: string) {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return new UserDTO(user);
  }

  async updateUser(data: UpdateUserInput, id: string) {
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        name: data.name,
        position: data.position,
        smallDescription: data.smallDescription,
        description: data.description,
      },
    });

    return new UserDTO(user);
  }
}
