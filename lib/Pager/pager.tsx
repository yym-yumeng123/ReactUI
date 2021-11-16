import React, { FC, useMemo } from "react";
import Icon from "lib/Icon/icon";

import unique from "lib/Helpers/unique";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-pager");

import "./pager.scss";
interface PagerProps {
  totalPage?: number;
  current?: number;
  onChange?: (n: number) => void;
}

const Pager: FC<PagerProps> = props => {
  const { current = 1, totalPage = 7, onChange } = props;

  const pages = useMemo(() => {
    // unique 去重 -> 过滤 -> 排序
    if (totalPage >= 7) {
      return unique(
        [
          1,
          totalPage, // 最后一页
          current, // 当前页
          current - 1,
          current - 2,
          current + 1,
          current + 2
        ]
          .filter(i => i >= 1 && i <= totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev: Array<any>, cur, index, arr) => {
        // index 差值大于 1 , 插入 ...
        prev.push(cur);
        arr[index + 1] !== undefined &&
          arr[index + 1] - arr[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
    } else {
      const minPages = []
      for(let i = 1; i <= totalPage; i ++) {
        minPages.push(i)
      }
      return minPages
    }
  }, [current]);
  console.log(pages, "pages...");

  const handleChangeCurrent = (page: number) => {
    if (page < 1 || page > totalPage) return;
    onChange && onChange(page);
  };

  const pagerElement = pages.map(item => {
    if (item === current) {
      return (
        <span
          className={mergeClass({
            item: true,
            current: current === item
          })}
        >
          {item}
        </span>
      );
    } else if (item === "...") {
      return (
        <span className={mergeClass("separator")}>
          <Icon name="elipsis" size="12" />
        </span>
      );
    } else {
      return (
        <span
          className={mergeClass("item")}
          onClick={() => handleChangeCurrent(item)}
        >
          {item}
        </span>
      );
    }
  });

  return (
    <div className={mergeClass("")}>
      <span
        className={mergeClass({ prev: true, disabled: current === 1 })}
        onClick={() => handleChangeCurrent(current - 1)}
      >
        <Icon className="position-icon" name="arrow-left-bold" />
      </span>
      {pagerElement}
      <span
        className={mergeClass({ next: true, disabled: current === totalPage })}
        onClick={() => handleChangeCurrent(current + 1)}
      >
        <Icon className="position-icon" name="arrow-right-bold" />
      </span>
    </div>
  );
};

export default Pager;
