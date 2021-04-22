import React, { FC, useMemo } from "react";
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

  const pages = useMemo(() => {
    return unique(
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
      return (
        <span className={prefix("separator")}>
          <Icon name="elipsis" size="12" />
        </span>
      );
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
      <span
        className={prefix({"prev": true, disabled: current === 1})}
        onClick={() => handleChangeCurrent(current - 1)}
      >
        <Icon className="position-icon" name="arrow-left-bold" />
      </span>
      {pagerElement}
      <span
        className={prefix({"next": true, disabled: current === totalPage})}
        onClick={() => handleChangeCurrent(current + 1)}
      >
        <Icon className="position-icon" name="arrow-right-bold" />
      </span>
    </div>
  );
};

export default Pager;
