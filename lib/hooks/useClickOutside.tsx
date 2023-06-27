/**
 * 点击元素外可以关闭改元素
 */

import { RefObject, useEffect } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: Function) => {
  // 点击后处理的事情
  const listener = (event: MouseEvent) => {
    // ref.current 不存在 or ref dom 包括点击的内容
    if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
};

export default useClickOutside;
