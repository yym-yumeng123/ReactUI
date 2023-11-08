import { useEffect, useRef } from "react";

const useUpdateCollapse = (dep: boolean, fn: () => void) => {
  const isFirst = useRef(true);
  // 是否第一次
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, [dep]);
};

export default useUpdateCollapse;
