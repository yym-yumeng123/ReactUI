import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";
import DatePickerExample from "./datepicker.example";
const dateDefaultDemo = require("!!raw-loader!./datepicker.example.tsx");

const CardDemo = () => {
  return (
    <>
      <pre>
        已完成功能:
        <br />
        1. 选择日期
        <br />
        2. 上一月, 下一月, 上一年, 下一年
      </pre>
      <Demo code={dateDefaultDemo.default}>
        <DatePickerExample />
      </Demo>
      <Card title="API">
        <API type="date" />
      </Card>
    </>
  );
};

export default CardDemo;
