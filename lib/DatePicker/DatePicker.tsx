import React, { useEffect, useMemo, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

import HelperDate from "./helper";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-date-picker");

import "./datePicker.scss";

const DatePicker = () => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  // const [visibleDays, setVisibleDays] = useState<number[]>([]); // 可见的天数

  useEffect(() => {
    console.log(allDates, "34343");
  }, []);

  // 获取总共 42 天的数组
  const allDates = useMemo(() => {
    const frontDays = [];
    const currentDays = [];
    const laterDays = [];

    const date = new Date();
    const first = HelperDate.firstDayOfMonth(date); // 一个月的第一天
    const last = HelperDate.lastDayOfMonth(date); // 一个月的最后一天
    const [year, month] = HelperDate.getYearMonthDate(date); // 当天的年月日

    // 获取当月所有天数的数组
    for (let i = first.getDate(); i <= last.getDate(); i++) {
      currentDays.push(new Date(year, month, i));
    }

    /**
     * @description getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天
     * @return 前面有几天日期
     */
    const n = first.getDay() === 0 ? 6 : first.getDay() - 1;

    // 得到当月的前一个月的剩余天数
    for (let i = 0; i <= n; i++) {
      frontDays.unshift(new Date(year, month, -i));
    }

    /**
     * @description 一月跨度最多七周 42天, 后面剩余几天
     */
    const m = 42 - currentDays.length - frontDays.length;
    for (let i = 1; i <= m; i++) {
      laterDays.push(new Date(year, month + 1, i));
    }

    return [...frontDays, ...currentDays, ...laterDays];
  }, []);

  const renderContent = () => {
    const mapWeek = {
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
      7: "日"
    };

    const days = () => {
      return (
        <div className={mergeClass("content")}>
          <div className={mergeClass("week")}>
            {HelperDate.range(1, 7).map((i: keyof typeof mapWeek) => {
              return (
                <span className={mergeClass("week-days")}>{mapWeek[i]}</span>
              );
            })}
          </div>

          {HelperDate.range(1, 42 / 7).map(i => {
            return (
              <div className={mergeClass("date-line")}>
                {HelperDate.range(1, 7).map(day => (
                  <span className={mergeClass("date-cell")}>
                    {allDates[(i - 1) * 7 + day - 1].getDate()}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      );
    };
    const mapMode = {
      days: days(),
      months: <div className={mergeClass("content")}>月</div>,
      years: <div className={mergeClass("content")}>年</div>
    };

    return mapMode[mode];
  };

  const onClickYear = () => setMode("years");
  const onClickMonth = () => setMode("months");

  return (
    <>
      <Input />
      <div className={mergeClass("pop")}>
        <div className={mergeClass("nav")}>
          <div className="left-action">
            <Icon size="12" name="page_first" color="#8e8e93" />
            <Icon
              name="arrow_right"
              style={{
                transform: "rotate(180deg)",
                fontSize: "12px",
                fill: "#8e8e93"
              }}
            />
          </div>
          <div className="date-wrap">
            <span onClick={onClickYear}>2020年</span>
            <span onClick={onClickMonth}>8月</span>
          </div>
          <div className="right-action">
            <Icon size="12" name="arrow_right" color="#8e8e93" />
            <Icon size="12" name="page_last" color="#8e8e93" />
          </div>
        </div>
        <div className={mergeClass("panels")}>{renderContent()}</div>
        <div className={mergeClass("actions")}></div>
      </div>
    </>
  );
};

export default DatePicker;
