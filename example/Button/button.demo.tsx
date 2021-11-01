import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

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
      <Card title="按钮类型">
        <Demo code={codeLevel.default}>
          <p className="tips">按钮类型有4种, 分别是普通按钮,提醒按钮, 危险按钮, 链接按钮</p>
          <ButtonTypeExample />
        </Demo>
      </Card>

      <Card title="不可点击类型">
        <Demo code={codeDisabled.default}>
          <p className="tips">添加 disabled 属性, 即可让按钮不可点击</p>
          <ButtonDisabledExample />
        </Demo>
      </Card>
      <Card title="Block按钮">
        <Demo code={codeBlock.default}>
          <p className="tips">Block 按钮适应父元素宽度</p>
          <ButtonBlockExample />
        </Demo>
      </Card>

      <Card title="按钮尺寸">
        <Demo code={codeSize.default}>
          <p className="tips">按钮有大、中、小三种尺寸</p>
          <ButtonSizeExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="button" />
      </Card>
    </div>
  );
};

export default IconDemo;
