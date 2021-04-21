import React, { FC, useEffect, useMemo, useState } from "react";
import Icon from "lib/Icon/icon";
import { unique } from "../utils/utils";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./pager.scss";

const prefix = addPrefixAndscopedClassMarker("yui-pager");

interface PagerProps {
  totalPage?: number;
  current?: number;
  onChange?: (n: number) => void;
}

const Pager: FC<PagerProps> = props => {
  const { current = 1, totalPage = 1, onChange } = props;

  // const [pages, setPages] = useState( [
  //   1,
  //   totalPage,
  //   current,
  //   current - 1,
  //   current - 2,
  //   current + 1,
  //   current + 2
  // ]);



  const pages = useMemo(() => {
    const spreadPages = unique(
      [
        1,
        totalPage,
        current,
        current - 1,
        current - 2,
        current + 1,
        current + 2
      ]
        .filter(i => i >= 1 && i <= totalPage)
        .sort((a, b) => a - b)
    ).reduce((prev: Array<any>, cur, index, arr) => {
      prev.push(cur);
      arr[index + 1] !== undefined &&
        arr[index + 1] - arr[index] > 1 &&
        prev.push("...");
      return prev;
    }, []);

    return spreadPages;
  }, [current]);

  const handleChangeCurrent = (page: number) => {
    if (page < 1 || page > totalPage) return;
    onChange && onChange(page);
  };

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
      return (
        <span
          className={prefix("item")}
          onClick={() => handleChangeCurrent(item)}
        >
          {item}
        </span>
      );
    }
  });

  return (
    <div className={prefix("")}>
      <span onClick={() => handleChangeCurrent(current - 1)}>
        <Icon name="page_first" size="12" />
      </span>
      {pagerElement}
      <span onClick={() => handleChangeCurrent(current + 1)}>
        <Icon name="page_last" size="12" />
      </span>
    </div>
  );
};

export default Pager;
