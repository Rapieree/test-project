import {clsx} from "clsx";
import React, {ButtonHTMLAttributes} from "react";
import customButtonStyle from "./custom-button.module.css";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string,
  children?: React.ReactNode,
}

const CustomButton: React.FC<TProps> = ({className = ``, children, ...props}) => {
  return (
    <button className={clsx(customButtonStyle.button, className)} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
