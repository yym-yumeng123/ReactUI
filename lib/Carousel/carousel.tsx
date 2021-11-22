import React, { FC, ReactElement, useEffect, useState } from "react";
import CarouselItem from "./carouselItem";
import "./carousel.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel");

interface CarouselProps {
  children: Array<ReactElement>;
  selected?: string;
}

const Carousel: FC<CarouselProps> = props => {
  const { children, selected } = props;
  const [select, setSelect] = useState(selected);

  useEffect(() => {
    let index = 0;
    setInterval(() => {
      index++;
      if (index > 2) {
        index = 0;
      }
      setSelect(children[index].props.name);
    }, 3000);
  }, []);
  // setTimeout(() => {
  // setBindIndex(1);
  // }, 3000);

  const renderItem = React.Children.map(children, (child, index) => {
    if (child.type !== CarouselItem) {
      throw new Error("Carousel 的子元素必须是 CarouselItem");
    }
    return React.cloneElement(child, {
      // 设置选中的值 === name 没设置第一个
      visible: select ? select === child.props.name : index === 0
    });
  });

  return (
    <div className={mergeClass("")}>
      <div className={mergeClass("viewport")}>{renderItem}</div>
    </div>
  );
};

export default Carousel;
