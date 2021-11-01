import * as React from "react";
import "./button.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-button");

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

interface BaseButtonProps {
  children: React.ReactNode;
  level?: "default" | "primary" | "danger" | "link" | ButtonType;
  size?: "lg" | "sm" | "xs" | ButtonSize;
  disabled?: boolean;
  className?: string;
  href?: string;
  block?: boolean;
}

// 联合类型 button
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
// a链接 联合类型
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
// a 链接 和 button 属性有的不同   Partial 都是可选的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
  const {
    children,
    level = "default",
    size,
    disabled,
    href,
    block,
    className,
    ...restProps
  } = props;

  const classes = mergeClass(
    {
      "": true,
      [`${level}`]: !!level,
      [`${size}`]: !!size,
      disabled: !!disabled,
      block: !!block
    },
    { extra: className }
  );
  return (
    <>
      {level === "link" ? (
        <a className={classes} href={href} target="_blank" {...restProps}>
          {children}
        </a>
      ) : (
        // button 自带 disabled   disabled={disabled}
        <button className={classes} {...restProps}>
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
