import React, { useState } from "react";
import Tree from "lib/Tree/Tree";

const TreeExampleMultiple1 = () => {
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

  const [selecteValues, setSelecteValues] = useState<string[]>([]);

  const onChange = (val: string[]) => {
    console.log(val, "我是多选");
    setSelecteValues(val);
  };

  return (
    <Tree
      sourceData={treeArray}
      onChange={onChange}
      selected={selecteValues}
      multiple={true}
    />
  );
};
export default TreeExampleMultiple1;
