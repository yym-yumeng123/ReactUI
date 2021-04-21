import React, { FC, useEffect, useState } from "react";
import Icon from "lib/Icon/icon";
import { unique } from "../utils/utils";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./pager.scss";

const prefix = addPrefixAndscopedClassMarker("yui-pager");

interface PagerProps {
  totalPage: number;
  current?: number;
}

const Pager: FC<PagerProps> = props => {
  const { current = 1, totalPage = 0 } = props;

  const [pages, setPages] = useState<Array<any>>([
    1,
    totalPage,
    current,
    current - 1,
    current - 2,
    current + 1,
    current + 2
  ]);

  useEffect(() => {
    const sortAndUniquePages = unique(pages.filter(i => i >=1 && i <= totalPage).sort((a, b) => a - b));
    const spreadPages = sortAndUniquePages.reduce(
      (prev: Array<any>, cur, index, arr) => {
        prev.push(cur);
        arr[index + 1] !== undefined &&
          arr[index + 1] - arr[index] > 1 &&
          prev.push("...");
        return prev;
      },
      []
    );

    setPages(spreadPages);

    console.log("122", spreadPages);
  }, []);

  const pagerElement = pages.map(item => {
    if (item === current) {
      return (
        <span
          className={prefix({
            item: true,
            current: current === item
          })}
        >
          {item}
        </span>
      );
    } else if (item === "...") {
      return <span className={prefix("separator")}>...</span>;
    } else {
      return <span className={prefix("item")}>{item}</span>;
    }
  });

  return (
    <div className={prefix("")}>
      <Icon name="page_first" size="12" />
      {pagerElement}
      <Icon name="page_last" size="12" />
    </div>
  );
};

export default Pager;
