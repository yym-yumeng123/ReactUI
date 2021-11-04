import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import ToastExample from "./toast.example";
// tslint:disable-next-line: no-var-requires
const codeDemo = require("!!raw-loader!./toast.example.tsx");

const ToastDemo = () => {
  const options = '{options}'
  return (
    <>
      <Card title=" 功能描述">
        <ul>
          <li><code>全局提示操作信息</code></li>
          <li><code>当ajax请求成功/失败可以展示成功提示</code></li>
          <li><code>...</code></li>
        </ul>
      </Card>

      <Card title="代码演示">
        <Demo code={codeDemo.default}>
          <ToastExample />
        </Demo>
      </Card>

      <Card title="API">
        <div style={{marginBottom: '10px'}}>
          <h3>组件提供静态方法使用</h3>
          <pre>toast({options}): options 可以有下面参数</pre>
        </div>
        <API type="toast" />
      </Card>
    </>
  );
};

export default ToastDemo;
