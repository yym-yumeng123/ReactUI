import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import ButtonTypeExample from "./buttonType.example";
import ButtonDisabledExample from "./buttonDisabled.example";
import ButtonBlockExample from "./buttonBlock.example";
import ButtonSizeExample from "./buttonSize.example";
// tslint:disable-next-line: no-var-requires
const codeLevel = require("!!raw-loader!./buttonType.example.tsx");
const codeDisabled = require("!!raw-loader!./buttonType.example.tsx");
const codeBlock = require("!!raw-loader!./buttonBlock.example.tsx");
const codeSize = require("!!raw-loader!./buttonSize.example.tsx");

import "./button.demo.scss";

const IconDemo = () => {
  return (
    <div className="content">
      <h1 className="margin_bottom">代码演示</h1>
      <h2>按钮类型</h2>
      <Demo code={codeLevel.default}>
        <p>按钮类型有4种, 分别是普通按钮,提醒按钮, 危险按钮, 链接按钮</p>
        <ButtonTypeExample />
      </Demo>
      <h2>不可点击状态</h2>
      <Demo code={codeDisabled.default}>
        <p>添加 disabled 属性, 即可让按钮不可点击</p>
        <ButtonDisabledExample />
      </Demo>
      <h2>Block按钮</h2>
      <Demo code={codeBlock.default}>
        <p>Block 按钮适应父元素宽度</p>
        <ButtonBlockExample />
      </Demo>
      <h2>按钮尺寸</h2>
      <Demo code={codeSize.default}>
        <p>按钮有大、中、小三种尺寸</p>
        <ButtonSizeExample />
      </Demo>

      <API type='button' />
    </div>
  );
};

export default IconDemo;
