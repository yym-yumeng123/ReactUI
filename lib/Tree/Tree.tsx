import React from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import './tree.scss'

const sc = addPrefixAndscopedClassMarker("yui-tree");
interface SourceDataItem {
  title: string;
  key: string;
  children?: SourceDataItem[] | undefined | null;
}
interface TreeProps {
  sourceData: SourceDataItem[];
}

const Tree: React.FC<TreeProps> = props => {
  const { sourceData } = props;

  /**
   * 递归渲染树的每一项
   * @param item 数组的每一项
   * @param level 处于第几层, 默认为0层
   */
  const renderItem = (item: SourceDataItem, level = 0) => {
    const classes = {
      [`level-${level}`]: true,
      item: true
    };
    return (
      <div key={item.key} className={sc(classes)}>
        <div className={sc('title')}><Icon size="12" name="page_turning_right" />{item.title}</div>
        {item.children?.map(subItem => {
          // 每次渲染 级别 + 1
          return renderItem(subItem, level + 1);
        })}
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
