import React, { FC, ReactElement } from "react";
import Radio from "./Radio";

interface RadioGroupProps {
  children: Array<ReactElement>;
  onChange?: any;
  value?: any;
}

const RadioGroup: FC<RadioGroupProps> = props => {
  const { children, onChange, value = "" } = props;

  const renderGroup = () => {
    return React.Children.map(children, (child, index) => {
      if (child.type !== Radio) {
        throw new Error("单选组的子元素必须是 Radio");
      }
      return React.cloneElement(child, {
        onChange,
        value
      });
    });
  };

  return <div>{renderGroup()}</div>;
};

export default RadioGroup;
