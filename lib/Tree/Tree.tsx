import React, { FC } from "react";
import TreeItem from "./tree-item";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./tree.scss";

const mergeClass = addPrefixAndMergeClass("yui-tree");

const Tree: FC<TreeProps> = (props) => {
  const { sourceData } = props;

  const onItemChange = (values: string[]) => {
    props.onChange(Array.from(new Set(values)) as string[]);
  };

  return (
    <div className={mergeClass("")}>
      {sourceData?.map((item) => (
        <TreeItem
          onItemChange={onItemChange}
          key={item.key}
          item={item}
          level={0}
          treeProps={props}
        />
      ))}
    </div>
  );
};

export default Tree;
