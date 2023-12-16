import * as uuid from "uuid";
import {SITE_URL} from "../../../config";
import {ApiRoute} from "../../const/const";

export const createActivationLink = () => {
  return `${SITE_URL}${ApiRoute.USER_ACTIVATION}?id=${uuid.v4()}`;
};
