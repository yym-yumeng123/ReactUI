import React, { FC, useMemo } from "react";
import Icon from "lib/Icon/icon";

import unique from "lib/Helpers/unique";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-pager");

import "./pager.scss";
interface PagerProps {
  totalPage?: number;
  current?: number;
  hideIfOneTotal?: boolean
  onChange?: (n: number) => void;
}

const Pager: FC<PagerProps> = props => {
  const { current = 1, totalPage = 5, onChange, hideIfOneTotal = false } = props;

  // 计算出来的属性
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
          prev.push("separator");
        return prev;
      }, []);
    } else {
      const minPages = [];
      for (let i = 1; i <= totalPage; i++) {
        minPages.push(i);
      }
      return minPages;
    }
  }, [current]);

  const handleChangeCurrent = (page: number) => {
    if (page < 1 || page > totalPage) return;
    onChange && onChange(page);
  };

  // 给每一个 item 页 添加不同的样式
  const pagerElement = pages.map(page => {
    if (page === current) {
      return (
        <span
          className={mergeClass({
            item: true,
            current: current === page
          })}
        >
          {page}
        </span>
      );
    } else if (page === "separator") {
      return (
        <span className={mergeClass("separator")}>
          <Icon name="elipsis" size="12" />
        </span>
      );
    } else {
      return (
        <span
          className={mergeClass("item")}
          onClick={() => handleChangeCurrent(page)}
        >
          {page}
        </span>
      );
    }
  });

  return (
    <div className={mergeClass("")}>
      <span
        className={mergeClass({ prev: true, disabled: current === 1, hide: totalPage === 1 && hideIfOneTotal })}
        onClick={() => handleChangeCurrent(current - 1)}
      >
        <Icon className="position-icon" size="7" name="arrow-left-bold" />
      </span>
      {pagerElement}
      <span
        className={mergeClass({ next: true, disabled: current === totalPage, hide: totalPage === 1 && hideIfOneTotal })}
        onClick={() => handleChangeCurrent(current + 1)}
      >
        <Icon className="position-icon" size="7" name="arrow-right-bold" />
      </span>
    </div>
  );
};

export default Pager;
