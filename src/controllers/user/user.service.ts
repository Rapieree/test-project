import bcrypt from "bcrypt";
import {ApiError} from "../../service/api/error";
import {prisma} from "../../service/prisma-client";
import {handlePromise, log} from "../../utils/utils";
import {TRegistrationData} from "./user.types";
import {createActivationLink} from "./user.utils";

const userService = {
  async registration(data: TRegistrationData) {
    const [findingError, user] = await handlePromise(prisma.user.findFirst({
      where: {
        OR: [
          {email: data.email.toLowerCase()},
          {username: data.username},
        ],
      }
    }));

    if (findingError) {
      log(`User Service Registration`, findingError);
      throw ApiError.internalServerError();
    }

    if (user) {
      const errorMessage = user.email === data.email.toLowerCase()
        ? `Пользователь с таким емейлом уже существует`
        : `Пользователь с таким ником уже существует`;
      throw ApiError.badRequest(errorMessage);
    }

    const {name, email, password, username} = data;
    const hashingPassword = await bcrypt.hash(password, 5);
    const activationLink = createActivationLink();

    const [creatingError, newUser] = await handlePromise(prisma.user.create({
      data: {
        name,
        username,
        email: email.toLowerCase(),
        password: hashingPassword,
        isActivated: false,
        activationLink,
      }
    }));

    if (creatingError) {
      log(`User Service Registration`, creatingError);
      throw ApiError.internalServerError();
    }

    return newUser;
  },

  async activateUser(activationLink: string) {
    const [findingError, user] = await handlePromise(prisma.user.findUnique({
      where: {activationLink},
    }));

    if (findingError) {
      throw ApiError.internalServerError();
    }

    if (!user) {
      throw ApiError.badRequest(`Ссылка недействительна`);
    }

    if (user.isActivated) {
      throw ApiError.badRequest(`Аккаунт уже активирован`);
    }

    const [updatingError] = await handlePromise(prisma.user.update({
      where: {id: user.id},
      data: {isActivated: true}
    }));

    if (!updatingError) {
      throw ApiError.internalServerError();
    }

    return true;
  }
};

export {
  userService,
};
