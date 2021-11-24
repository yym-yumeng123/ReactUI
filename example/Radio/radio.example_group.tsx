import React, { ChangeEvent } from "react";
import Radio, { RadioGroup } from "lib/Radio";

const RadioGroupExample = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e, e.target.value, "我是group选中的值");
  };

  return (
    <div>
      <RadioGroup activeValue="2" onChange={onChange}>
        <Radio value="1">单选1</Radio>
        <Radio value="2">单选2</Radio>
        <Radio value="3">单选3</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupExample;
