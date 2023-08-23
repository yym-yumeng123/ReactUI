import React, {
  ChangeEvent,
  Children,
  FC,
  ReactElement,
  createContext,
  useState,
} from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import Radio from "./radio";

const mergeClass = addPrefixAndMergeClass("yui-radio-group");

export const GroupContext = createContext<string | undefined>(undefined);

interface IRadioGroupProps {
  children: Array<ReactElement>;
  // 默认选中的是哪个
  activeValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: FC<IRadioGroupProps> = (props) => {
  const { children, activeValue = "", onChange } = props;
  const [selectedValue, setSelectedValue] = useState<string | number>(
    activeValue
  );

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setSelectedValue(e.target.value);
  };

  const renderGroup = () => {
    return Children.map(children, (child) => {
      if (child.type !== Radio) {
        throw new Error("单选组的子元素必须是 Radio");
      }

      return React.cloneElement(child, {
        ...child.props,
        selectedValue,
        onChange: handleGroupChange, // 回调事件
      });
    });
  };

  return (
    <GroupContext.Provider value="group">
      <div className={mergeClass("")}>{renderGroup()}</div>
    </GroupContext.Provider>
  );
};

export default RadioGroup;
export { Radio };
