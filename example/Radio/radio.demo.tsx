import React, { useState } from "react";
import Radio from "lib/Radio";
import RadioGroup from "lib/Radio/group";

const RadioDemo = () => {
  const [val, setVal] = useState("");
  const onChange = (val: any) => {
    setVal(val);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e, "wwew");
    console.log(e.target.value, "wwew");
  };

  return (
    <div>
      <Radio onChange={handleChange} />
      <Radio onChange={handleChange} value="我是value..." />
      <Radio onChange={handleChange}>单选</Radio>
      <Radio onChange={handleChange} value="真好">
        11111
      </Radio>

      <br />

      <Radio checked>checked 为 true</Radio>

      <br />


      <Radio disabled>disabled 为 true</Radio>
      <Radio disabled checked>disabled 为 true</Radio>

      <br />

      <RadioGroup value={val} onChange={onChange}>
        <Radio>单选1</Radio>
        <Radio>单选2</Radio>
        <Radio>单选3</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioDemo;
