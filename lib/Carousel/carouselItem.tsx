import React, { FC } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./carousel.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel-item");

interface CarouselItemProps {
  visible?: boolean;
  name: string; // 每个 item 默认的名字
  children?: React.ReactElement
}

const CarouselItem: FC<CarouselItemProps> = props => {
  const { children, visible = false } = props;

  return (
    <ReactCSSTransitionGroup
      transitionName={mergeClass("wrapper")}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {visible && <div className={mergeClass("")}>{children}</div>}
    </ReactCSSTransitionGroup>
  );
};

export default CarouselItem;
