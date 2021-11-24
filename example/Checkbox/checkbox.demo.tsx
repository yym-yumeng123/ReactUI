import React from "react";
import { Checkbox, CheckboxGroup } from "lib/Checkbox";

const CheckboxDemo = () => {
  const handleTestChange = (e: any) => {
    console.log(e.target.checked, e.target.value, e.target);
  };
  const handleChangeBox = (selected: string[]) => {
    console.log(selected, '选中的值');

  }
  return (
    <>
      <br />
      <Checkbox
        onChange={handleTestChange}
        indeterminate
        checked
        value={"我是,,,"}
      ></Checkbox>
      <Checkbox value="苹果"></Checkbox>
      <br />
      <Checkbox value="111" checked={false}>
        梨子
      </Checkbox>
      <br />
      <Checkbox value="222">香蕉</Checkbox>
      <br />
      <Checkbox value="1212" disabled>
        栗子
      </Checkbox>
      <br />
      <Checkbox value="32" checked disabled></Checkbox>
      <br />
      <Checkbox value="doxrkl ">多选框111</Checkbox>
      <br />

      <CheckboxGroup selected={["11", "33"]} onChange={handleChangeBox}>
        <Checkbox value="11"></Checkbox>
        <Checkbox value="22">跳绳</Checkbox>
        <Checkbox value="33">游泳</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup>
        <Checkbox value="11"></Checkbox>
        <Checkbox value="22">跳绳</Checkbox>
        <Checkbox value="33">游泳</Checkbox>
      </CheckboxGroup>
    </>
  );
};

export default CheckboxDemo;
