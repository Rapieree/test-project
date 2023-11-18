import {NextApiRequest, NextApiResponse} from "next";
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
  }
};

export {
  userController,
};
