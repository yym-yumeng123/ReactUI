import React, { useState } from "react";
import Checkbox from "lib/Checkbox";

const CheckboxDemo = () => {
  const handleTestChange = (e: any) => {
    console.log(e.target.checked, e.target.value, e.target);
  };
  return (
    <>
      <br />
      <Checkbox onChange={handleTestChange} value={'我是,,,'}></Checkbox>
      <Checkbox onChange={handleTestChange}>苹果</Checkbox>
      <Checkbox/>
      <br />
      <Checkbox defaultChecked checked={false}>
        梨子
      </Checkbox>
      <br />
      <Checkbox onChange={handleTestChange}>香蕉</Checkbox>
      <br />
      <Checkbox disabled>栗子</Checkbox>
      <br />
      <Checkbox defaultChecked disabled></Checkbox>
      <br />
      <Checkbox onChange={handleTestChange}>多选框111</Checkbox>
    </>
  );
};

export default CheckboxDemo;
