import { UserDTO } from "../dtos/user";
import { NotFoundError } from "../errors";
import prisma from "../utils/db";

export class UserService {
  async getUserByEmail(email: string) {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return new UserDTO(user);
  }
}
