import React, { ChangeEvent, FC, ReactElement, useState } from "react";
import Radio from "./radio";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-radio-group");

interface IRadioGroupProps {
  children: Array<ReactElement>;
  // 默认选中的是哪个
  activeValue?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: FC<IRadioGroupProps> = props => {
  const { children, activeValue = "", onChange } = props;
  const [selectedValue, setSelectedValue] = useState<string | number>(
    activeValue
  );

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setSelectedValue(e.target.value);
  };

  const renderGroup = () => {
    return React.Children.map(children, child => {
      if (child.type !== Radio) {
        throw new Error("单选组的子元素必须是 Radio");
      }

      return React.cloneElement(child, {
        ...child.props,
        name: "group",
        selectedValue,
        onChange: handleGroupChange // 回调事件
      });
    });
  };

  return <div className={mergeClass("")}>{renderGroup()}</div>;
};

export default RadioGroup;
export { Radio };
