import {NextApiRequest, NextApiResponse} from "next";
import {SITE_URL} from "../../../config";
import {ApiError} from "../../service/api/error";
import {UserDto} from "./user.dto";
import {userService} from "./user.service";
import {userValidation} from "./user.validation";

const userController = {
  async registration(req: NextApiRequest, res: NextApiResponse) {
    const {error, value} = userValidation.registration(req.body);

    if (error) {
      throw ApiError.badRequest(error.message);
    }

    const user = await userService.registration(value);

    res.status(200).json(UserDto.toJSON(user));
  },

  async activateUser(req: NextApiRequest, res: NextApiResponse) {
    const url = `${SITE_URL}${req.url}`;
    const {error, value: activationUrl} = userValidation.activationLink(url);

    if (error) {
      throw ApiError.badRequest(`Некорректный адрес`, error);
    }

    const result = await userService.activateUser(activationUrl);

    res.status(200).json(result);
  }
};

export {
  userController,
};
