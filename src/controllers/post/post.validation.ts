import {ValidationOptions} from "joi";
import joi from "types-joi";
import {validate} from "../../service/api/validation";

const title = joi.string().min(3).max(120).required();
const content = joi.string().min(120).max(4048).required();
const postId = joi.string().min(3).required();

export const postValidation = {
  bodyCreate(body: any, options?: ValidationOptions) {
    return validate(joi.object({
      title,
      content,
    }).required(), body, options);
  },
  queryGet(query: any, options?: ValidationOptions) {
    return validate(joi.object({
      id: postId,
    }).required(), query, options);
  },
  queryDelete(query: any, options?: ValidationOptions) {
    return validate(joi.object({
      id: postId,
    }).required(), query, options);
  }
};
