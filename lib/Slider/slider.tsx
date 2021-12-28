import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState
} from "react";
import "./slider.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-slider");

interface SliderProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ onChange, initialValue = 0 }) => {
  const [barLeftInstance, setBarLeftInstance] = useState(0);
  const dragging = useRef(false);
  const railRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const startBarLeftRef = useRef(0);

  // 设置 track 的 width & 滑块的 left
  useEffect(() => {
    const { width } = railRef.current!.getBoundingClientRect();
    const percent = initialValue / 100;
    setBarLeftInstance(Number((width * percent).toFixed(2)));
  }, []);

  // 监听 document 事件
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("selectstart", onSelect);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      // 滚动时 取消 选择事件
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);

  const setLeftBarPosition = (number: number) => {
    const { width } = railRef.current!.getBoundingClientRect();
    if (number < -12 || number >= width) return;
    const value = Math.floor((number / width) * 100) + 1;
    onChange && onChange(value);
    setBarLeftInstance(number);
  };

  const onSelect = (e: Event) => {
    // 在拖动中 禁止 默认事件
    if (dragging.current) {
      e.preventDefault();
    }
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
    dragging.current = true;
    startXRef.current = e.clientX;
    startBarLeftRef.current = barLeftInstance;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (dragging.current) {
      const delta = e.clientX - startXRef.current;
      setLeftBarPosition(delta + startBarLeftRef.current);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    dragging.current = false;
  };

  const handleSetTrackWidth: MouseEventHandler<HTMLDivElement> = e => {
    const { left } = railRef.current!.getBoundingClientRect();
    setLeftBarPosition(e.clientX - left);
  };

  return (
    <div className={mergeClass("wrapper")} onClick={handleSetTrackWidth}>
      <div ref={railRef} className={mergeClass("rail")}></div>
      <div
        className={mergeClass("track")}
        style={{ width: barLeftInstance + "px" }}
      ></div>
      <div
        onMouseDown={onMouseDown}
        className={mergeClass("bar")}
        style={{ left: barLeftInstance + "px" }}
      ></div>
    </div>
  );
};

export default Slider;
