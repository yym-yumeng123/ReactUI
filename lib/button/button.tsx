import * as React from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link",
}

interface ButtonProps {
  children: React.ReactNode;
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, btnType, size, disabled } = props;

  // class 不同属性
  const classes = classNames("yui-button", {
    [`yui-button-${btnType}`]: btnType,
    [`yui-button-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  return <div>{children}</div>;
};

export default Button;
