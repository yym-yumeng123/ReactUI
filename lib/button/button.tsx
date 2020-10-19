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
  lever?: 'primary' | 'danger' | 'link';
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  href?: string;
  block?: boolean;
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = props => {
  const { children, lever, size, disabled, href, onClick, block } = props;

  // class 不同属性
  const classes = classNames("yui-button", {
    [`yui-button-${lever}`]: lever,
    [`yui-button-${size}`]: size,
    ['yui-button-disabled']: disabled,
    ['yui-button-block']: block,

  });
  return (
    <>
      {lever === "link" ? (
        <a href={href} target="_blank" className={classes}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
