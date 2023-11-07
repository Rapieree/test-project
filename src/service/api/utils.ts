import {ValidationOptions, ValidationResult} from "joi";
import {BaseSchema, InterfaceFrom} from "types-joi";

export const validate = <T extends BaseSchema<any>>(schema: T, value: any, options?: ValidationOptions) => {
  return schema.validate(value, options) as unknown as ValidationResult<InterfaceFrom<T>>;
};
