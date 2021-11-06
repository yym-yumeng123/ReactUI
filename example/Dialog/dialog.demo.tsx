import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import DialogBasic from "./dialog.example_basic";
import DialogText from "./dialog.example_text";
import DialogFooter from "./dialog.example_footer";
import DialogClosable from "./dialog.example_closable";
import DialogSimpleAPI from "./dialog.example_api";

// tslint:disable-next-line: no-var-requires
const codeDialogBasic = require("!!raw-loader!./dialog.example_basic.tsx");
const codeDialogText = require("!!raw-loader!./dialog.example_text.tsx");
const codeDialogFooter = require("!!raw-loader!./dialog.example_footer.tsx");
const codeDialogClose = require("!!raw-loader!./dialog.example_closable.tsx");
const codeDialogApi = require("!!raw-loader!./dialog.example_api.tsx");

const DialogDemo = () => {
  return (
    <div className="content">
      <Card title="Dialog 基本使用">
        <Demo code={codeDialogBasic.default}>
          <DialogBasic />
        </Demo>
      </Card>

      <Card title="Dialog 修改默认按钮的 text">
        <Demo code={codeDialogText.default}>
          <DialogText />
        </Demo>
      </Card>
      <Card title="Dialog 修改底部元素">
        <Demo code={codeDialogFooter.default}>
          <DialogFooter />
        </Demo>
      </Card>
      <Card title="Dialog 去掉关闭 icon & 遮罩不能点击">
        <Demo code={codeDialogClose.default}>
          <DialogClosable />
        </Demo>
      </Card>
      <Card title="Dialog 的简易使用 API">
        <Demo code={codeDialogApi.default}>
          <DialogSimpleAPI />
        </Demo>
      </Card>

      <Card title="API">
        <API type="dialog" />
      </Card>
    </div>
  );
};

export default DialogDemo;
