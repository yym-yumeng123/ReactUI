import React from "react";

interface SourceDataItem {
  title: string;
  value: string;
  children?: SourceDataItem[];
}
interface TreeProps {
  sourceData: SourceDataItem[];
}

const Tree: React.FC<TreeProps> = props => {
  const { sourceData } = props;

  const TreeItem = (item: SourceDataItem) => {
    return (
      <div key={item.value}>
        { item.title }
        {item.children?.map(subItem => {
          return TreeItem(subItem)
        })}
      </div>
    )
  }

  return (
    <div>
      {sourceData.map(item => {
        return TreeItem(item)
      })}
    </div>
  );
};

export default Tree;
