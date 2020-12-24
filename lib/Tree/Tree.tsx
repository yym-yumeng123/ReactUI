import React from "react";
import TreeItem from "./tree-item";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./tree.scss";

const sc = addPrefixAndscopedClassMarker("yui-tree");

const Tree: React.FC<TreeProps> = props => {
  const { sourceData, onChange } = props;

  const onItemChange = (values: string[]) => {
    console.log("最终值", values);
    onChange(values as string[]);
  };

  return (
    <div className={sc("")}>
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
