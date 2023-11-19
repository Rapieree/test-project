import bcrypt from "bcrypt";
import * as uuid from "uuid";
import {SITE_URL} from "../../../config";
import {ApiRoute} from "../../const/const";
import {ApiError} from "../../service/api/error";
import {prisma} from "../../service/prisma-client";
import {handlePromise, log} from "../../utils/utils";

type TRegistrationData = {
  name: string,
  email: string,
  password: string,
}

const createActivationLink = () => {
  return `${SITE_URL}${ApiRoute.USER_ACTIVATION}?id=${uuid.v4()}`;
};

const userService = {
  async registration(data: TRegistrationData) {
    const [findingError, user] = await handlePromise(prisma.user.findFirst({
      where: {
        email: data.email.toLowerCase(),
      }
    }));

    if (findingError) {
      log(`User Service Registration`, findingError);
      throw ApiError.internalServerError();
    }

    if (user) {
      throw ApiError.badRequest(`Пользователь с таким емейлом уже существует`);
    }

    const {name, email, password} = data;
    const hashingPassword = await bcrypt.hash(password, 5);
    const activationLink = createActivationLink();

    const [creatingError, newUser] = await handlePromise(prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashingPassword,
        isActivated: false,
        activationLink,
      }
    }));

    if (creatingError) {
      log(`User Service Registration`, findingError);
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
