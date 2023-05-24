import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  ReactNode,
} from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

import "./button.scss";

const mergeClass = addPrefixAndMergeClass("yui-button");

type LevelString = "default" | "primary" | "danger" | "link" | "dashed";

type SizeString = "lg" | "sm" | "xs";

type ColorLeverMap = Record<
  "default" | "primary" | "danger" | "dashed",
  string
>;

export enum ButtonType {
  Default = "default",
  Primary = "primary",
  Danger = "danger",
  Link = "link",
  Dashed = "dashed",
}

interface BaseButtonProps {
  children: ReactNode;
  level?: LevelString | ButtonType;
  size?: SizeString;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  href?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

// 联合类型 button
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;

// a链接 联合类型
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

// a 链接 和 button 属性有的不同   Partial 都是可选的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    level = "default",
    disabled = false,
    block = false,
    loading = false,
    loadingText = "加载中...",
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
      disabled,
      block,
      loading,
    },
    { extra: className }
  );

  const mapTypeColor: ColorLeverMap = {
    default: "#c5c6c7",
    primary: "#fff",
    danger: "#fff",
    dashed: "#c5c6c7",
  };

  const onClickButton = () => {
    if (disabled || loading) return;
    onClick && onClick();
  };

  const onClickAnchor = () => {
    if (disabled || loading) return;
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
          <>
            {loading ? (
              <span className={mergeClass("loading-context")}>
                <Icon
                  size="12"
                  spin
                  name="refresh"
                  color={mapTypeColor[level]}
                />
                <i>{loadingText}.</i>
              </span>
            ) : (
              children
            )}
          </>
        </button>
      )}
    </>
  );
};

export default Button;
