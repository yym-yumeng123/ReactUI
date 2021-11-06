import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import "./demo.scss";

// import DialogBasic from "./dialog.example_basic";
import LayoutExample from "./layout.example";

// tslint:disable-next-line: no-var-requires
const codeLayout = require("!!raw-loader!./layout.example.tsx");

const LayoutDemo = () => {
  return (
    <div className="layout_demo">
      <Card title="组件概述">
        <ul>
          <li>
            <code>
              Layout: 布局的容器, 里面可以嵌套 Header、Content、SideBar、Footer,
              或者Layout
            </code>
          </li>
          <li>
            <code>Header: 头部, 只能放在 Layout 中</code>
          </li>
          <li>
            <code>SideBar: 侧边栏, 只能放在 Layout 中</code>
          </li>
          <li>
            <code>Content: 主要部分, 只能放在 Layout 中</code>
          </li>
          <li>
            <code>Footer: 底部区域, 只能放在 Layout 中</code>
          </li>
        </ul>
      </Card>
      <Card title="Layout 代码演示">
        <Demo code={codeLayout.default}>
          <LayoutExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="layout" />
      </Card>
    </div>
  );
};

export default LayoutDemo;
