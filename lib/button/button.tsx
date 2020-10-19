import * as React from "react";
import classNames from "classnames";
import "./button.scss";

export enum ButtonSize {
  Large = "lg",
  Small = "sm"
}

export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link"
}

interface ButtonProps {
  children: React.ReactNode;
  level?: "default" | "primary" | "danger" | "link" | ButtonType;
  size?: "lg" | "sm" | "xs" | ButtonSize;
  disabled?: boolean;
  className?: string;
  href?: string;
  block?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, level, size, disabled, href, onClick, block } = props;

  // class 不同属性
  const classes = classNames("yui-button", {
    [`yui-button-${level}`]: level,
    [`yui-button-${size}`]: size,
    ["yui-button-disabled"]: disabled,
    ["yui-button-block"]: block
  });
  return (
    <>
      {level === "link" ? (
        <a className={classes} href={href} target="_blank">
          {children}
        </a>
      ) : (
        // button 自带 disabled   disabled={disabled}
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  level: "default",
  disabled: false,
  block: false
};

export default Button;
