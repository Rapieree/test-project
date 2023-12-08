import {clsx} from "clsx";
import React, {InputHTMLAttributes} from "react";
import customInputStyle from "./custom-input.module.css";

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string,
  label?: string,
}

const CustomInput: React.FC<TProps> = ({className = ``, label, ...props}) => {
  return (
    <label className={clsx(customInputStyle.label, className)}>
      <span className={clsx(customInputStyle.labelText)}>{label}</span>
      <input className={clsx(customInputStyle.input)} {...props} />
    </label>
  );
};

export default CustomInput;
