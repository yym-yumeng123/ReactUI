import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  ReactElement,
} from "react";
import Checkbox from "./checkbox";

interface IGroupProps {
  selected?: string[];
  children: Array<ReactElement>;
  onChange?: (selected: string[]) => void;
}

const CheckboxGroup: FC<IGroupProps> = (props) => {
  const { children, selected = [], onChange } = props;

  const [selectedValue, setSelectedValue] = useState(selected);

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setSelectedValue([...selectedValue, value]);
    } else {
      setSelectedValue((arr) => arr.filter((i) => i !== value));
    }
  };

  useEffect(() => {
    onChange && onChange(selectedValue);
  }, [selectedValue]);

  const childWithProps = React.Children.map(children, (child, index) => {
    if (child.type !== Checkbox) {
      throw new Error("复选框组的子元素必须是 Checkbox");
    }

    return React.cloneElement(child, {
      ...child.props,
      key: index,
      selected,
      name: "group",
      onChange: handleGroupChange, // 回调事件
    });
  });

  return <div>{childWithProps}</div>;
};

export default CheckboxGroup;
