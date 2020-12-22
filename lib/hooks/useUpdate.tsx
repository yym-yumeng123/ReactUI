import { useEffect, useState } from "react";

const useUpdate = (deps: boolean, fn: () => void) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(x => x + 1);
  }, [deps]);
  useEffect(() => {
    if (count > 0) {
      fn();
    }
  }, [deps]);
};

export default useUpdate;
