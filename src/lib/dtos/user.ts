import { type User } from "@prisma/client";

export type IUserDTO = Omit<User, "password">;

export class UserDTO implements IUserDTO {
  public id: string;
  public email: string;
  public name: string;
  public position: string;
  public smallDescription: string;
  public description: string;

  constructor(user: IUserDTO) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.position = user.position;
    this.smallDescription = user.smallDescription;
    this.description = user.description;
  }
}
