import React, { ChangeEventHandler } from "react";
import { Checkbox } from "lib/Checkbox";

const CheckboxExampleBasic = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    console.log(e.target.value, '我复选框的值');
  };
  return (
    <>
      <Checkbox onChange={handleChange} value="复选框"></Checkbox>
      <Checkbox value="Checkbox" checked={true}>
        复选框
      </Checkbox>
      <Checkbox value="不可点击" disabled></Checkbox>
      <Checkbox value="选中不可点击" checked disabled></Checkbox>
      <Checkbox value="不完全选择" indeterminate></Checkbox>
    </>
  );
};

export default CheckboxExampleBasic;
