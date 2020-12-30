import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [expanded, setExpanded] = useState(initialValue);

  const collapse = () => {
    setExpanded(false);
  };

  const expand = () => {
    setExpanded(true);
  };

  return {
    expanded,
    expand,
    collapse
  };
};

export default useToggle;
