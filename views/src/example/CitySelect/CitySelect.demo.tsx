import React from "react";
import Demo from "views/src/components/demo";
import Card from "lib/Card/card";

import CitySelectExample from "./cityselect.example";
const codeDefaultDemo = require("!!raw-loader!./cityselect.example.tsx");

const CitySelectDemo = () => {
  return (
    <div>
      <pre>
        说明:
        <br />
        1. web端模拟手机选择城市组件, 选择城市后, 关闭弹框, 告诉外界数据
        <br />
        2. 当前城市使用的免费IP API, 请求得到的, 可能会有错误.
      </pre>
      <Card title="手机选城市">
        <Demo code={codeDefaultDemo.default}>
          <CitySelectExample />
        </Demo>
      </Card>
    </div>
  );
};

export default CitySelectDemo;
