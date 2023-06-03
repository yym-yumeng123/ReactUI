import React from "react";
import { Checkbox, CheckboxGroup } from "lib/Checkbox";

const CheckboxExampleGroup = () => {
  const options = [
    {
      children: "电影",
      value: "1",
      disabled: true
    },
    {
      children: "电视剧",
      value: "2",
      disabled: false
    },
    {
      children: "做梦",
      value: "3",
      disabled: false
    }
  ];

  const handleChange = (selected: string[]) => {
    console.log(selected, "选中的值");
  };
  return (
    <>
      <CheckboxGroup selected={["11", "33"]} onChange={handleChange}>
        <Checkbox value="11">苹果</Checkbox>
        <Checkbox value="22">香蕉</Checkbox>
        <Checkbox value="33">火龙果</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup>
        <Checkbox value="11">跑步</Checkbox>
        <Checkbox value="22">跳绳</Checkbox>
        <Checkbox value="33" disabled>
          游泳
        </Checkbox>
      </CheckboxGroup>

      <CheckboxGroup>
        {options.map(item => (
          <Checkbox key={item.value} value={item.value} disabled={item.disabled}>
            {item.children}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default CheckboxExampleGroup;
