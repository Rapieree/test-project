import {Prisma, Role} from "@prisma/client";

type TUserJSON = {
  id: string,
  name: string,
  email: string,
  role: Role,
  createdAt: string,
  updatedAt: string,
}

class UserDto {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  activationLink: string;
  isActivated: boolean;

  constructor(data: Prisma.UserGetPayload<any>) {
    this.id = data.id;
    this.name = data.name;
    this.role = data.role;
    this.email = data.email;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.activationLink = data.activationLink;
    this.isActivated = data.isActivated;
  }

  toJSON(data: Prisma.UserGetPayload<any>): TUserJSON {
    return {
      id: data.id,
      name: data.name,
      role: data.role,
      email: data.email,
      updatedAt: data.updatedAt.toJSON(),
      createdAt: data.createdAt.toJSON(),
    };
  }
}

export type {
  TUserJSON,
};

export {
  UserDto,
};
