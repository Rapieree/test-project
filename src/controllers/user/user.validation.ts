import {ValidationOptions} from "joi";
import joi from "types-joi";
import {validate} from "../../service/api/validation";

const name = joi.string().alphanum().min(2).required();
const password = joi.string().alphanum().min(8).required();
const email = joi.string().email().required();

const userValidation = {
  registration(data: any, options?: ValidationOptions) {
    return validate(joi.object({
      name,
      password,
      email,
    }), data, options);
  }
};

export {
  userValidation,
};
