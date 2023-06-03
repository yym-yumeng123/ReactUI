import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import CarouselExample from "./carousel.example";

// tslint:disable-next-line: no-var-requires
const codeCarousel = require("!!raw-loader!./carousel.example.tsx");

const CarouselDemo = () => {
  return (
    <div className="content">
      <Card title="基本轮播组件">
        <Demo code={codeCarousel.default}>
          <CarouselExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="carousel" />
      </Card>
    </div>
  );
};

export default CarouselDemo;
