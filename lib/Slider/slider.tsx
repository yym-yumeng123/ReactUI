import React, { FC, MouseEventHandler, useEffect, useRef } from "react";
import "./slider.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-slider");

interface SliderProps {
  initialValue: number;
}

const Slider: FC<SliderProps> = ({ initialValue = 10 }) => {
  const dragging = useRef(false);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
    dragging.current = true;
    console.log(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (dragging.current) {
      console.log(e.clientX);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    dragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className={mergeClass("wrapper")}>
      <div className={mergeClass("rail")}></div>
      <div
        className={mergeClass("track")}
        style={{ width: initialValue + "px" }}
      ></div>
      <div
        onMouseDown={onMouseDown}
        className={mergeClass("bar")}
        style={{ left: initialValue + "px" }}
      ></div>
    </div>
  );
};

export default Slider;
