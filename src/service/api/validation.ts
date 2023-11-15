import {ValidationOptions, ValidationResult} from "joi";
import {BaseSchema, InterfaceFrom} from "types-joi";
import {joiRussianLocale} from "./validation.locale";

export const validate = <T extends BaseSchema<any>>(schema: T, value: any, options?: ValidationOptions) => {
  const _options: ValidationOptions = {...(options || {}), messages: joiRussianLocale};

  return schema.validate(value, _options) as unknown as ValidationResult<InterfaceFrom<T>>;
};
