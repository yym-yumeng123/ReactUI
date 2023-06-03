import React, { FC } from "react";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel-item");

import "./carousel.scss";

interface CarouselItemProps {
  visible?: boolean;
  name: string; // 每个 item 默认的名字
  children?: React.ReactElement;
}

const CarouselItem: FC<CarouselItemProps> = (props) => {
  const { children, visible = false } = props;

  return <>{visible && <div className={mergeClass("")}>{children}</div>}</>;
};

export default CarouselItem;
