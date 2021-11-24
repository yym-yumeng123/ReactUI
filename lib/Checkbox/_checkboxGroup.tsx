/**
 * ! 使用 [] 模式来为 checkbox 循环, 暂且搁置, 使用 组件子元素模式
 */

import React, { FC } from "react";
import Checkbox from "./checkbox";

/**
 * API 的设计
 * 1. 使用 Children 每个 child 便利
 * 2. 使用 options. 便利数组
 */

// value 的 类型
export type CheckboxValueType = string | number;

export interface CheckboxOptionType {
  label: CheckboxValueType;
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
  dataSource?: Array<CheckboxOptionType | string>;
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

const Group: FC<IGroupProps> = ({ children, dataSource = [] }) => {
  console.log(children, dataSource);

  // 获取传入的数组, 并转换 => 借鉴antd
  const getDataSource = () =>
    dataSource.map(item => {
      if (typeof item === "string") {
        return {
          label: item,
          value: item
        };
      }
      return item;
    });

  console.log(getDataSource(), "get,,,,,");

  if (dataSource && dataSource.length > 0) {
    children = getDataSource().map(item => (
      <Checkbox value={item.value} key={item.value.toString()}>
        {item.label}
      </Checkbox>
    ));
  }

  return <div>{children}</div>;
};

export default Group;
