import React, {ChangeEvent, FC, InputHTMLAttributes, ReactElement} from "react";
import {addPrefixAndscopedClassMarker} from "../utils/classes";
import Icon from "lib/Icon/icon";

import "./input.scss";

const prefix = addPrefixAndscopedClassMarker("yui-input");

// 定义 size
type InputSize = "lg" | "md" | "sm" | "xs";

/**
 * 希望几个 HTML input 所有属性
 * 原有属性已经有 size, 我们再次定义, 会有冲突, 怎么解决?
 * 1. 修改名称
 * 2. 使用 Omit
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  // value: any;
  disabled?: boolean;
  size?: InputSize;
  icon?: string;
  // 添加前缀
  prepand?: string | ReactElement;
  // 添加后缀
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  const {disabled, size, icon, prepand, append, value, ...restProps} = props;
  // 根据属性计算不同的 className

  const classes = {
    "": true,
    [`${size}`]: !!size,
    "disabled": !!disabled,
    "icon": !!icon
  };

  // const fixControlledValue = (value: any) => {
  //   if (typeof value === "undefined" || value === null) {
  //     return "";
  //   }
  //   return value;
  // };
  //
  // if ("value" in props) {
  //   delete restProps.defaultValue;
  //   restProps.value = fixControlledValue((value));
  // }

  return (
    <div className={prefix("wrapper")}>
      <input className={prefix(classes)} type="text" {...restProps}/>
      {icon && <Icon size="10" color="#C5C6C7" name={icon}/>}
    </div>
  );
};

export default Input;
