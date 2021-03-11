import * as React from "react";
import { ChangeEvent, useState } from "react";
import Input, { InputProps } from "lib/Input/Input";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./autoComplete.scss";
const prefix = addPrefixAndscopedClassMarker("yui-auto");

// Omit 忽略的属性
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (item: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = props => {
  const { fetchSuggestions, onSelect, value, ...restProps } = props;
  // input 输入的值
  const [inputValue, setInputValue] = useState(value);
  // 数据源
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const results = fetchSuggestions(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setSuggestions([]);
    onSelect && onSelect(item);
  };

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className={prefix("")}>
      <Input value={inputValue} {...restProps} onChange={handleChange} />
      <section className={prefix("content")}>
        {suggestions.length > 0 && generateDropDown()}
      </section>
    </div>
  );
};

export default AutoComplete;
