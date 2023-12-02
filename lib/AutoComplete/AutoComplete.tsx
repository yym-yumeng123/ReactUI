import * as React from "react";
import {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import Input, { InputProps } from "lib/Input/Input";
import Icon from "lib/Icon/icon";
import useDebounce from "lib/hooks/useDebounce";
import useClickOutside from "lib/hooks/useClickOutside";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

import "./autoComplete.scss";

const mergeClass = addPrefixAndMergeClass("yui-auto");

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

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, renderOption, value, ...restProps } =
    props;

  // input 输入的值
  const [inputValue, setInputValue] = useState(value);
  // 数据源
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  // 键盘事件 上下 高亮
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const debounceValue = useDebounce(inputValue);

  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  // 当 debounceValue 变化, 操作请求值
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const results = fetchSuggestions(debounceValue);
      // 返回结果是否是异步
      if (results instanceof Promise) {
        setLoading(true);
        results.then((res) => {
          setLoading(false);
          setSuggestions(res);
        });
      } else {
        setSuggestions(results);
      }
      setHighlightIndex(-1);
    } else {
      setSuggestions([]);
    }
  }, [debounceValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) index = suggestions.length - 1;
    setHighlightIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    /**
     * 上: 38
     * 下: 40
     * esc: 27
     * enter: 13
     */
    switch (e.keyCode) {
      case 13:
        suggestions[highlightIndex] &&
          handleSelect(suggestions[highlightIndex]);
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setSuggestions([]);
        break;
      default:
        break;
    }
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
    triggerSearch.current = false;
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const classes = {
            "content-item": true,
            "item-highlight": index === highlightIndex,
          };
          return (
            <li
              className={mergeClass(classes)}
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
    <div className={mergeClass("")} ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      <section className={mergeClass("content")}>
        {loading && <Icon spin name="refresh" className={mergeClass("loading")} />}
        {suggestions.length > 0 && generateDropDown()}
      </section>
    </div>
  );
};

export default AutoComplete;
