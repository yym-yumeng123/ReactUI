import React, { useState } from "react";
import Tree, { SourceDataItem } from "lib/Tree/Tree";
const TreeDemo = () => {
  const [treeArray] = useState([
    {
      title: "1",
      key: "1",
      children: [
        {
          title: "1.1",
          key: "1.1",
          children: [
            { title: "一之一之一", key: "1.1.1" },
            { title: "一之一之二", key: "1.1.2" }
          ]
        },
        { title: "1.2", key: "1.2" }
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

  const [selecteValues, setSelecteValues] = useState(["1.1", "1.2"]);
  const [selectedValue] = useState('1.1');

  const onChange = (item: SourceDataItem, bool: boolean) => {
    bool === true
      ? setSelecteValues([...selecteValues, item.title])
      : setSelecteValues(selecteValues.filter(value => value !== item.title));
  };
  return (
    <div style={{ width: 200, border: "1px solid" }}>
      {selectedValue}
      <Tree
        sourceData={treeArray}
        onChange={onChange}
        selected={selectedValue}
      />
    </div>
  );
};
export default TreeDemo;
