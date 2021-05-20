import React from "react";
import Radio from "lib/Radio/Radio";
import RadioGroup from "lib/Radio/Group";

const RadioDemo = () => {
  return (
    <div>
      <Radio>单选</Radio>

      <br />

      <Radio checked>checked 为 true</Radio>

      <br />

      <RadioGroup value="单选2">
        <Radio>单选1</Radio>
        <Radio>单选2</Radio>
        <Radio>单选3</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioDemo;
