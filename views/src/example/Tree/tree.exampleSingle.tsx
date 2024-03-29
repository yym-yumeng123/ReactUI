import React, { useState } from "react";
import Tree from "lib/Tree/Tree";

const TreeExample = () => {
  // 源数据
  const [treeArray] = useState<SourceDataItem[]>([
    {
      title: "1",
      key: "1",
      children: [
        {
          title: "1.1",
          key: "1.1",
          children: [
            { title: "一之一之一", key: "1.1.1" },
            { title: "一之一之二", key: "1.1.2" },
          ],
        },
        { title: "1.2", key: "1.2" },
      ],
    },
    {
      title: "二",
      key: "2",
      children: [
        { title: "二之一", key: "2.1" },
        { title: "二之二", key: "2.2" },
      ],
    },
  ]);

  const [selectedValue, setSelecteValue] = useState(["1.1"]);

  const onChange = (val: string[]) => {
    console.log(val, "val.............");
    setSelecteValue(val);
  };

  return (
    <Tree sourceData={treeArray} onChange={onChange} selected={selectedValue} />
  );
};
export default TreeExample;
