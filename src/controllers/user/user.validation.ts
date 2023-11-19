import {ValidationOptions} from "joi";
import joi from "types-joi";
import {validate} from "../../service/api/validation";

const NAME_REGEXP = /^[a-zA-Zа-яА-Я ]+$/;

const name = joi.string().regex(NAME_REGEXP).min(2).required();
const password = joi.string().alphanum().min(8).required();
const email = joi.string().email().required();
const activationLink = joi.string().uri().required();

const userValidation = {
  registration(data: any, options?: ValidationOptions) {
    return validate(joi.object({
      name,
      password,
      email,
    }).required(), data, options);
  },

  activationLink(url: string, options?: ValidationOptions) {
    return validate(activationLink, url, options);
  }
};

export {
  userValidation,
};
