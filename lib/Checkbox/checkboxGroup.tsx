import React, { FC, ReactElement } from "react";
import Checkbox from "./checkbox";

/**
 * API 的设计
 * 1. 使用 Children 每个 child 便利
 * 2. 使用 options. 便利数组
 */

// value 的 类型
export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  // onChange?: (e: CheckboxChangeEvent) => void;
}

/**
 * abstract 抽象,提炼
 */
export interface AbstractCheckboxGroupProps {
  // prefixCls?: string;
  // className?: string;
  options?: Array<CheckboxOptionType | string>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

interface IGroupProps extends AbstractCheckboxGroupProps {
  name?: string;
  defaultValue?: Array<CheckboxValueType>;
  value?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  children?: React.ReactNode;
}

const Group: FC<IGroupProps> = ({ children }) => {
  console.log(children);

  const renderItems = React.Children.map(children, (child, index) => {
    return <Checkbox></Checkbox>;
  });

  return <div>{renderItems}</div>;
};

export default Group;
