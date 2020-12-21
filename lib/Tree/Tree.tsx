import React from "react";
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
  // 在哪一层勾选的, 勾上还是关掉
  onChange: (item: SourceDataItem, bool: boolean) => void;
} & (
  | { selected: string[], multiple: true }
  | { selected: string, multiple: false }
);

const Tree: React.FC<TreeProps> = props => {
  const { sourceData, selected, onChange, multiple } = props;

  /**
   * 递归渲染树的每一项
   * @param item 数组的每一项
   * @param level 处于第几层, 默认为0层
   */
  const renderItem = (
    item: SourceDataItem,
    selected: string[],
    onChange: (item: SourceDataItem, bool: boolean) => void,
    level = 0
  ) => {
    const classes = {
      [`level-${level}`]: true,
      item: true
    };
    return (
      <div key={item.key} className={sc(classes)}>
        <div className={sc("title")}>
          <Icon size="12" name="page_turning_right" />
          <input
            type="checkbox"
            name=""
            id=""
            checked={selected.indexOf(item.title) >= 0}
            onChange={e => onChange(item, e.target.checked)}
          />
          {item.title}
        </div>
        {item.children?.map(subItem => {
          // 每次渲染 级别 + 1
          return renderItem(subItem, selected, onChange, level + 1);
        })}
      </div>
    );
  };

  if (multiple) {
    return (
      <div className={sc("")}>
        {sourceData?.map(item => {
          return renderItem(item, selected, onChange);
        })}
      </div>
    );
  } else {
    return (
      <div>无数据</div>
    )
  }
};

export default Tree;
