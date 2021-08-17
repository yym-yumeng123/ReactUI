import React from "react";
import Checkbox from "lib/Checkbox";

const CheckboxDemo = () => {
  return (
    <>
      <Checkbox value={"多选框"}></Checkbox>
      <br />
      <Checkbox value={"多选框"} defaultChecked></Checkbox>
      <br />
      <Checkbox value={"多选框"}></Checkbox>
    </>
  );
};

export default CheckboxDemo;
