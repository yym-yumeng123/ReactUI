import React, { FC, useEffect, useState } from "react";
import { unique } from "../utils/utils";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./pager.scss";

const prefix = addPrefixAndscopedClassMarker("yui-pager");

interface PagerProps {
  total: number;
  current?: number;
}

const Pager: FC<PagerProps> = props => {
  const { current = 1, total = 0 } = props;
  const [pages, setPages] = useState([
    1,
    total / 10,
    current,
    current - 1,
    current - 2,
    current + 1,
    current + 2
  ]);

  useEffect(() => {
    const sortAndUniquePages = unique(pages.sort((a, b) => a - b));
    const spreadPages = sortAndUniquePages.reduce((prev, cur, index, arr) => {
      prev.push(cur);
      arr[index + 1] !== undefined &&
        arr[index + 1] - arr[index] > 1 &&
        prev.push("...");
      return prev;
    }, []);

    setPages(spreadPages);

    console.log("122", spreadPages);
  }, []);

  return (
    <div className={prefix("")}>
      {pages.map(item => {
        return <span>{item}</span>;
      })}
    </div>
  );
};

export default Pager;
