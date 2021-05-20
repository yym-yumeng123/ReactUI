import React, { useState } from "react";
import Radio from "lib/Radio";

const RadioDemo = () => {
  const [val, setVal] = useState('');
  const onChange = (val) => {
    setVal(val)
  }

  return (
    <div>
      <Radio>单选</Radio>

      <br />

      <Radio checked>checked 为 true</Radio>

      <br />

      <Radio.Group value={val} onChange={onChange}>
        <Radio>单选1</Radio>
        <Radio>单选2</Radio>
        <Radio>单选3</Radio>
      </Radio.Group>
    </div>
  );
};

export default RadioDemo;
