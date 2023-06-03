import React from "react";
import Carousel, { CarouselItem } from "lib/Carousel/carousel";
import sz from "../../assets/image/sz.png";
import xd from "../../assets/image/xd.jpg";
import yy from "../../assets/image/yy.png";

import "./carousel.demo.scss";

const CarouselExample = () => {
  return (
    <div className="yui-carousel-demo">
      <Carousel selected="1" autoTime={2}>
        <CarouselItem name="1">
          <div className="box">1</div>
        </CarouselItem>
        <CarouselItem name="2">
          <div className="box">2</div>
        </CarouselItem>
        <CarouselItem name="3">
          <div className="box">3</div>
        </CarouselItem>
      </Carousel>

      <Carousel width={500} className="img">
        <CarouselItem name="11">
          <div className="box">
            <img src={sz} />
          </div>
        </CarouselItem>
        <CarouselItem name="22">
          <div className="box">
            <img src={xd} />
          </div>
        </CarouselItem>
        <CarouselItem name="33">
          <div className="box">
            <img src={yy} />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default CarouselExample;
