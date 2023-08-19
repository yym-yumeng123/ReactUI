import React, { FC, useMemo } from "react";
import Icon from "lib/Icon/icon";
import unique from "lib/Helpers/unique";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./pager.scss";

const mergeClass = addPrefixAndMergeClass("yui-pager");

export interface PagerProps {
  totalPage?: number; // 总共有几页
  current?: number; // 当前是哪一页
  hideIfOneTotal?: boolean; // 只有一页是否隐藏分页器
  onChange?: (n: number) => void;
}

const Pager: FC<PagerProps> = (props) => {
  const {
    onChange,
    current = 1,
    totalPage = 5,
    hideIfOneTotal = false,
  } = props;

  // 计算出来的属性
  const pages = useMemo(() => {
    // unique 去重 -> 过滤 -> 排序
    if (totalPage >= 7) {
      return unique(
        [
          1,
          current - 1,
          current - 2,
          current, // 当前页
          current + 1,
          current + 2,
          totalPage, // 最后一页
        ]
          .filter((i) => i >= 1 && i <= totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev: Array<any>, cur, index, arr) => {
        prev.push(cur);

        // index 差值大于 1 , 插入 ...
        arr[index + 1] !== undefined &&
          arr[index + 1] - arr[index] > 1 &&
          prev.push("separator");

        return prev;
      }, []);
    } else {
      const minPages: number[] = [];
      for (let i = 1; i <= totalPage; i++) {
        minPages.push(i);
      }
      return minPages;
    }
  }, [current, totalPage]);

  // 给每一个 item 页 添加不同的样式
  const pagerElement = pages.map((page, index) => {
    // 当前页高亮
    if (page === current) {
      return (
        <span
          key={page}
          className={mergeClass({
            item: true,
            current: current === page,
          })}
        >
          {page}
        </span>
      );
    } else if (page === "separator") {
      // 不显示的页数, 显示省略号
      return (
        <span className={mergeClass("separator")} key={`${page}_${index}`}>
          <Icon name="elipsis" size="12" />
        </span>
      );
    } else {
      // 不是当前页普通样式
      return (
        <span
          key={page}
          className={mergeClass("item")}
          onClick={() => handleChangeCurrent(page)}
        >
          {page}
        </span>
      );
    }
  });

  const handleChangeCurrent = (page: number) => {
    if (page < 1 || page > totalPage) return;
    onChange && onChange(page);
  };

  return (
    <div className={mergeClass("")}>
      {/* 分页器左箭头 */}
      <span
        className={mergeClass({
          prev: true,
          disabled: current === 1,
          hide: totalPage === 1 && hideIfOneTotal,
        })}
        onClick={() => handleChangeCurrent(current - 1)}
      >
        <Icon className="position-icon" size="7" name="arrow-left-bold" />
      </span>

      {/* 动态页数显示 */}
      {pagerElement}

      {/* 分页器右箭头 */}
      <span
        className={mergeClass({
          next: true,
          disabled: current === totalPage,
          hide: totalPage === 1 && hideIfOneTotal,
        })}
        onClick={() => handleChangeCurrent(current + 1)}
      >
        <Icon className="position-icon" size="7" name="arrow-right-bold" />
      </span>
    </div>
  );
};

export default Pager;
