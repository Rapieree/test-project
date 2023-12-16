import {ValidationOptions} from "joi";
import joi from "types-joi";
import {validate} from "../../service/api/validation";

const NAME_REGEXP = /^[a-zA-Zа-яА-Я ]+$/;
const USERNAME_REGEXP = /^[a-zA-Z0-9-]+$/;

const name = joi.string().regex(NAME_REGEXP).min(2).required();
const password = joi.string().alphanum().min(8).required();
const email = joi.string().email().required();
const username = joi.string().min(3).max(24).regex(USERNAME_REGEXP).required();
const activationLink = joi.string().uri().required();

const userValidation = {
  registration(data: any, options?: ValidationOptions) {
    return validate(joi.object({
      name,
      password,
      email,
      username,
    }).required(), data, options);
  },

  activationLink(url: string, options?: ValidationOptions) {
    return validate(activationLink, url, options);
  }
};

export {
  userValidation,
};
