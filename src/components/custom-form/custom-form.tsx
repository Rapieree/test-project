import {clsx} from "clsx";
import React, {FormHTMLAttributes} from "react";
import customFormStyle from "./custom-form.module.css";

type TProps = FormHTMLAttributes<HTMLFormElement> & {
  className?: string,
  children: React.ReactNode,
  disabled?: boolean
}

const CustomForm: React.ForwardRefRenderFunction<HTMLFormElement, TProps> = ({
  className = ``,
  children,
  disabled = false,
  ...nativeProps
}, ref) => {
  return (
    <form className={clsx(customFormStyle.form, className)} ref={ref} {...nativeProps}>
      <fieldset className={clsx(customFormStyle.fieldset)} disabled={disabled}>
        {children}
      </fieldset>
    </form>
  );
};

export default React.forwardRef(CustomForm);
