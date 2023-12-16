import {Role} from "@prisma/client";

export type TRegistrationData = {
  name: string,
  email: string,
  password: string,
  username: string,
}

export type TUserJSON = {
  id: string,
  name: string,
  email: string,
  role: Role,
  createdAt: string,
  updatedAt: string,
}
