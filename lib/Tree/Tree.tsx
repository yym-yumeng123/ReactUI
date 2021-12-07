import React from "react";
import TreeItem from "./tree-item";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-tree");

import "./tree.scss";

const Tree: React.FC<TreeProps> = props => {
  const { sourceData, onChange } = props;

  const onItemChange = (values: string[]) => {
    console.log("最终值", values);
    onChange(Array.from(new Set(values)) as string[]);
  };

  return (
    <div className={mergeClass("")}>
      {sourceData?.map(item => (
        <TreeItem
          onItemChange={onItemChange}
          key={item.key}
          treeProps={props}
          item={item}
          level={0}
        />
      ))}
    </div>
  );
};

export default Tree;
