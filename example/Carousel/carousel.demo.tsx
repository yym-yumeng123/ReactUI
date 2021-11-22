import React from "react";
import Carousel from "lib/Carousel/carousel";
import CarouselItem from "lib/Carousel/carouselItem";

import "./carousel.demo.scss";

const CarouselDemo = () => {
  return (
    <>
      <Carousel selected="3" autoPlay={false}>
        <CarouselItem name="sf">
          <div className="box">1sjkskjg </div>
        </CarouselItem>
        <CarouselItem name="2">
          <div className="box">dgsgsggsgsgsgsdgsg2</div>
        </CarouselItem>
        <CarouselItem name="3">
          <div className="box">3ss疯狂开始看</div>
        </CarouselItem>
      </Carousel>

      {/* <Carousel>
        <CarouselItem name="11">
          <div className="box">1</div>
        </CarouselItem>
        <CarouselItem name="22">
          <div className="box">2</div>
        </CarouselItem>
        <CarouselItem name="33">
          <div className="box">3</div>
        </CarouselItem>
      </Carousel> */}
    </>
  );
};

export default CarouselDemo;
