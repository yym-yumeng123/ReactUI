import * as React from "react";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-button");

import "./button.scss";

export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link",
  Dashed = "dashed"
}

interface BaseButtonProps {
  children: React.ReactNode;
  level?: "default" | "primary" | "danger" | "link" | "dashed" | ButtonType;
  size?: "lg" | "sm" | "xs";
  disabled?: boolean;
  className?: string;
  href?: string;
  block?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
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
    disabled = false,
    block = false,
    size,
    href,
    className,
    style,
    onClick,
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

  const onClickButton = () => {
    if (disabled) return;
    onClick && onClick();
  };

  const onClickAnchor = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <>
      {level === "link" ? (
        <a
          className={classes}
          style={style}
          href={href}
          target="_blank"
          onClick={onClickAnchor}
          {...restProps}
        >
          {children}
        </a>
      ) : (
        // button 自带 disabled   disabled={disabled}
        <button
          onClick={onClickButton}
          className={classes}
          style={style}
          {...restProps}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
