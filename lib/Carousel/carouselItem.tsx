import React, { FC } from "react";
import "./carousel.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel-item");

interface CarouselItemProps {
  visible?: boolean;
}

const CarouselItem: FC<CarouselItemProps> = props => {
  const { children, visible = false } = props;
  return <>{visible && <div className={mergeClass("")}>{children}</div>}</>;
};

export default CarouselItem;
