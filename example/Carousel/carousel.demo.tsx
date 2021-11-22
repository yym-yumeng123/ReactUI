import React from "react";
import Carousel from "lib/Carousel/carousel";
import CarouselItem from "lib/Carousel/carouselItem";

import "./carousel.demo.scss";

const CarouselDemo = () => {
  return (
    <Carousel>
      <CarouselItem>
        <div className="box">1</div>
      </CarouselItem>
      <CarouselItem>
        <div className="box">2</div>
      </CarouselItem>
      <CarouselItem>
        <div className="box">3</div>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselDemo;
