import { SignInSchema } from "@/schemas/signInSchema";
import prisma from "../utils/db";
import { createAccessToken } from "../utils/jwt";
import { ConflictError } from "../errors";

export class AuthService {
  async signIn(credentials: SignInSchema) {
    const user = await prisma.user.findFirst({
      where: { email: credentials.email },
    });

    if (!user || credentials.password !== user.password) {
      throw new ConflictError("Incorrect email or password");
    }

    return createAccessToken(user.id);
  }
}
