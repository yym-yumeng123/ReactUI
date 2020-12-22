import React from "react";
import TreeItem from "./tree-item";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./tree.scss";

const sc = addPrefixAndscopedClassMarker("yui-tree");

const Tree: React.FC<TreeProps> = props => {
  const { sourceData } = props;

  return (
    <div className={sc("")}>
      {sourceData?.map(item => (
        <TreeItem key={item.key} treeProps={props} item={item} level={0} />
      ))}
    </div>
  );
};

export default Tree;
