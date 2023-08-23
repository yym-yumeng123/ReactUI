import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import SliderExample from "./Slider.example";

// tslint:disable-next-line: no-var-requires
const codeRadio = require("!!raw-loader!./Slider.example.tsx");

const SliderDemo = () => {
  return (
    <div className="content">
      <Card title="Slider 滑块组件基本使用">
        <Demo code={codeRadio.default}>
          <SliderExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="slider" />
      </Card>
    </div>
  );
};

export default SliderDemo;
