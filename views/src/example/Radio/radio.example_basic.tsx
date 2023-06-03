import React from "react";
import Radio from "lib/Radio";

const RadioExampleBasic = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e, e.target.value, "我是什么...");
  };

  return (
    <div>
      <Radio value="Radio" />
      <Radio checked>Radio</Radio>

      <Radio onChange={handleChange} value="1">
        吃饭
      </Radio>

      <Radio disabled>不可点击</Radio>
      <Radio disabled checked>
        不可点击
      </Radio>
    </div>
  );
};

export default RadioExampleBasic;
