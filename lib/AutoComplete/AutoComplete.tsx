import * as React from "react";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import Input, { InputProps } from "lib/Input/Input";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import useDebounce from "lib/hooks/useDebounce";
import "./autoComplete.scss";
const prefix = addPrefixAndscopedClassMarker("yui-auto");

// 复杂的数据结构
interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;

// Omit 忽略的属性
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  // 参数是 str, 返回 带 value 的 复杂数据结构
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  // 选择时 是一个数据项,
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: React.FC<AutoCompleteProps> = props => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value,
    ...restProps
  } = props;
  // input 输入的值
  const [inputValue, setInputValue] = useState(value);
  // 数据源
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceValue = useDebounce(inputValue);

  // 当 inputValue 变化, 操作请求值
  useEffect(() => {
    if (debounceValue) {
      const results = fetchSuggestions(debounceValue);
      // 返回结果是否是异步
      if (results instanceof Promise) {
        console.log("trigger..");

        setLoading(true);
        results.then(res => {
          setLoading(false);
          setSuggestions(res);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
  }, [debounceValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li
              className={prefix("content-item")}
              key={index}
              onClick={() => handleSelect(item)}
            >
              {renderTemplate(item)}
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
        {loading && <Icon spin name="refresh" />}
        {suggestions.length > 0 && generateDropDown()}
      </section>
    </div>
  );
};

export default AutoComplete;
