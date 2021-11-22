import React, { FC, ReactElement, useEffect, useState } from "react";
import CarouselItem from "./carouselItem";
import "./carousel.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-carousel");

interface CarouselProps {
  children: Array<ReactElement>;
  selected?: string;
  autoPlay?: boolean; // 是否自动切换
}

const Carousel: FC<CarouselProps> = props => {
  const { children, selected, autoPlay = true } = props;
  const [select, setSelect] = useState(selected || children[0].props.name);

  useEffect(() => {
    if (autoPlay) {
      playAutomatically();
    }
  }, []);

  const playAutomatically = () => {
    const names = React.Children.map(children, child => child.props.name);
    let index = names.indexOf(select);

    // 用 setTimeout 模拟 setInterval
    let run = () => {
      if (index === names.length - 1) {
        index = 0;
      }

      setSelect(children[index].props.name);

      index++;
      setTimeout(run, 3000);
    };

    setTimeout(run, 3000);
  };

  const renderItem = React.Children.map(children, (child, index) => {
    if (child.type !== CarouselItem) {
      throw new Error("Carousel 的子元素必须是 CarouselItem");
    }
    return React.cloneElement(child, {
      // 设置选中的值 === name 没设置第一个
      visible: select === child.props.name
    });
  });

  return (
    <div className={mergeClass("")}>
      <div className={mergeClass("viewport")}>{renderItem}</div>
    </div>
  );
};

export default Carousel;
