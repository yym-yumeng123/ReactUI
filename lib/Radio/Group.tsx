import React, { FC, ReactElement, useEffect, useState } from "react";
import Radio from "./Radio";

interface RadioGroupProps {
  children: Array<ReactElement>;
  onChange?: any;
  value?: any;
}

const RadioGroup: FC<RadioGroupProps> = props => {
  const [val, setVal] = useState(value);
  const { children, onChange, value = "" } = props;

  useEffect(() => {
    setVal('')
  })

  const onRadioChange = e => {
    console.log(e);
    onChange && onChange(e)
  };

  const renderGroup = () => {
    console.log(val, 'val....');

    return React.Children.map(children, (child, index) => {
      if (child.type !== Radio) {
        throw new Error("单选组的子元素必须是 Radio");
      }
      return (
        <Radio
          key={index}
          // disabled={disabled}
          // size={size}
          {...child.props}
          onChange={onRadioChange}
          checked={val === child.props.children}
        />
      );
    });
  };

  return <div>{renderGroup()}</div>;
};


// Radio.Group = RadioGroup
export default RadioGroup;
