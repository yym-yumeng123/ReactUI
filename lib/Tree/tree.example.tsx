import React, { useState } from "react";
import Tree from "./Tree";
const TreeDemo = () => {
  const [treeArray] = useState([
    {
      title: '一',
      value: '1',
      children: [
        { title: '一之一', value: '1.1'},
        { title: '一之二', value: '1.2'}
      ]
    },
    {
      title: '二',
      value: '2',
      children: [
        { title: '二之一', value: '2.1'},
        { title: '二之二', value: '2.2'}
      ]
    },
  ]);
  return (
    <div>
      <Tree sourceData={treeArray} />
    </div>
  );
};
export default TreeDemo;
