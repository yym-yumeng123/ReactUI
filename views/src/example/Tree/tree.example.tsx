import React, { useState } from "react";
import Tree from "lib/Tree/Tree";

const TreeDemo = () => {
  const [treeArray] = useState([
    {
      title: "1",
      value: "1",
      children: [
        {
          title: "1.1",
          value: "1.1",
          children: [
            { title: "一之一之一", value: "1.1.1" },
            { title: "一之一之二", value: "1.1.2" }
          ]
        },
        { title: "1.2", value: "1.2" }
      ]
    },
    {
      title: "二",
      value: "2",
      children: [
        { title: "二之一", value: "2.1" },
        { title: "二之二", value: "2.2" }
      ]
    }
  ]);

  const [selecteValues, setSelecteValues] = useState<string[]>([]);
  const [selectedValue, setSelecteValue] = useState(["1.1"]);
  const onChange = (val: string[]) => {
    console.log(val, "val");
    setSelecteValues(val);
  };

  const onChange1 = (val: string[]) => {
    console.log(val, "val.............");
    setSelecteValue(val);
  };

  return (
    <div style={{ width: 200 }}>
      {selecteValues.join(", ")}
      <Tree
        sourceData={treeArray}
        onChange={onChange}
        selected={selecteValues}
        multiple={true}
      />

      <hr />

      <Tree
        sourceData={treeArray}
        onChange={onChange1}
        selected={selectedValue}
        multiple={false}
      />
    </div>
  );
};
export default TreeDemo;
