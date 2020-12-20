import React, { useState } from "react";
import Tree from "lib/Tree/Tree";
const TreeDemo = () => {
  const [treeArray] = useState([
    {
      title: "一",
      key: "1",
      children: [
        {
          title: "一之一",
          key: "1.1",
          children: [
            { title: "一之一之一", key: "1.1.1" },
            { title: "一之一之二", key: "1.1.2" }
          ]
        },
        { title: "一之二", key: "1.2" }
      ]
    },
    {
      title: "二",
      key: "2",
      children: [
        { title: "二之一", key: "2.1" },
        { title: "二之二", key: "2.2" }
      ]
    }
  ]);
  return (
    <div>
      <Tree sourceData={treeArray} />
    </div>
  );
};
export default TreeDemo;
