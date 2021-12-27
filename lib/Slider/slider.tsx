import React, { FC } from "react";
import "./slider.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-slider");

interface SliderProps {
  initialValue: number;
}

const Slider: FC<SliderProps> = ({ initialValue = 10 }) => {
  return (
    <div className={mergeClass("wrapper")}>
      <div className={mergeClass("rail")}></div>
      <div
        className={mergeClass("track")}
        style={{ width: initialValue + "px" }}
      ></div>
      <div
        className={mergeClass("bar")}
        style={{ left: initialValue + "px" }}
      ></div>
    </div>
  );
};

export default Slider;
