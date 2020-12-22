import React, { ChangeEventHandler, useState } from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./tree.scss";

const sc = addPrefixAndscopedClassMarker("yui-tree");
export interface SourceDataItem {
  title: string;
  key: string;
  children?: SourceDataItem[] | undefined | null;
}

// 联合类型 多选必为数组 单选为字符串
type TreeProps = {
  sourceData: SourceDataItem[];
} & (
  | {
      selected: string;
      multiple?: false;
      onChange: (values: string) => void;
    }
  | {
      selected: string[];
      multiple: true;
      onChange: (values: string[]) => void;
    }
);

const Tree: React.FC<TreeProps> = props => {
  const { sourceData, selected, onChange, multiple } = props;

  /**
   * 递归渲染树的每一项
   * @param item 数组的每一项
   * @param level 处于第几层, 默认为0层
   */
  const renderItem = (item: SourceDataItem, level = 0) => {
    // 展开
    const [expanded, setExpanded] = useState(true);
    const classes = {
      [`level-${level}`]: true,
      item: true
    };
    const checked = multiple
      ? selected.indexOf(item.title) >= 0
      : selected === item.title;

    const onSelectChange: ChangeEventHandler<HTMLInputElement> = e => {
      if (multiple) {
        if (e.target.checked) {
          onChange([...selected, item.title]);
        } else {
          onChange(selected.filter(value => value !== item.title));
        }
      } else {
        onChange(item.title);
      }
    };

    const collapse = () => {
      console.log("collapse");
      setExpanded(false);
    };

    const expand = () => {
      setExpanded(true);
      console.log("expand");
    };
    return (
      <div key={item.key} className={sc(classes)}>
        <div className={sc("title")}>
          {expanded ? (
            <Icon size="12" name="show_more" onClick={collapse} />
          ) : (
            <Icon size="12" name="page_turning_right" onClick={expand} />
          )}
          <input
            type="checkbox"
            name=""
            id=""
            checked={checked}
            onChange={onSelectChange}
          />
          {item.title}
        </div>
        <div className={sc({ children: true, collapsed: !expanded })}>
          {item.children?.map(subItem => {
            // 每次渲染 级别 + 1
            return renderItem(subItem, level + 1);
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={sc("")}>
      {sourceData?.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;
