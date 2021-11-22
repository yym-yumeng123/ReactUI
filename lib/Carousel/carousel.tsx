import React, { FC, ReactElement } from "react";
import CarouselItem from "./carouselItem";
import "./carousel.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel");

interface CarouselProps {
  children: Array<ReactElement>;
}

const Carousel: FC<CarouselProps> = props => {
  const { children } = props;

  const renderItem = React.Children.map(children, (child, index) => {
    if (child.type !== CarouselItem) {
      throw new Error("Carousel 的子元素必须是 CarouselItem");
    }
    return React.cloneElement(child, {
      visible: true
    });
  });

  return <div className={mergeClass("")}>{renderItem}</div>;
};

export default Carousel;
