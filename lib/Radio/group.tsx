import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useState
} from "react";
import Radio from "./radio";

interface IRadioGroupProps {
  children: Array<ReactElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

const RadioGroup: FC<IRadioGroupProps> = props => {
  const { children, onChange, value = "" } = props;
  const [selectedValue, setSelectedValue] = useState<string | number>(value);

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setSelectedValue(e.target.value)
  };

  const renderGroup = () => {
    return React.Children.map(children, (child, index) => {
      if (child.type !== Radio) {
        throw new Error("单选组的子元素必须是 Radio");
      }
      return React.cloneElement(child, {
        ...child.props,
        name: 'group',
        selectedValue,
        onChange: handleGroupChange
      });
    });
  };

  return <div>{renderGroup()}</div>;
};

export default RadioGroup;
