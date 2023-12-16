import {ApiRoute} from "../../const/const";
import {RC} from "../../const/const.types";
import {Api} from "../../service/api/api";
import {ApiError} from "../../service/api/error";
import {TApiSuccessData} from "../../service/api/types";
import {handlePromise} from "../../utils/utils";
import {TRegistrationData, TUserJSON} from "./user.types";

const api = new Api();

const userApi = {
  async registration(data: TRegistrationData): Promise<RC<TUserJSON, ApiError>> {
    const [error, result] = await handlePromise<TApiSuccessData<TUserJSON>, ApiError>(api.post<any, TUserJSON>(ApiRoute.USER_REGISTRATION, data));

    if (error) {
      return [error, null];
    }

    return [null, result.data];
  }
};

export {
  userApi,
};
