import React from "react";

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
    return (
      <div key={item.key} style={{ paddingLeft: level * 10 + "px" }}>
        {item.title}
        {item.children?.map(subItem => {
          // 每次渲染 级别 + 1
          return renderItem(subItem, level + 1);
        })}
      </div>
    );
  };

  return (
    <div>
      {sourceData.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;
