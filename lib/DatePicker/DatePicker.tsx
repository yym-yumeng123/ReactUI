import React, { useEffect, useMemo, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

import HelperDate from "./helper";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-date-picker");

import "./datePicker.scss";

const DatePicker = () => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [year, setYear] = useState<number>(1970);
  const [month, setMonth] = useState<number>(1);
  // const [visibleDays, setVisibleDays] = useState<number[]>([]); // 可见的天数

  useEffect(() => {
    console.log(allDates, "34343");
  }, []);

  // 获取总共 42 天的数组
  const allDates = useMemo(() => {
    const days = [];

    const date = new Date();
    const first = HelperDate.firstDayOfMonth(date); // 一个月的第一天
    const [year, month] = HelperDate.getYearMonthDate(date); // 当天的年月日
    setYear(year);
    setMonth(month + 1);

    /**
     * @description getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天
     * @return 前面有几天日期
     */
    const n = first.getDay();
    /**
     * 如果是第一天是星期天，则前面的天数为 0
     * 如果是第一天是星期一，则前面的天数为 6
     * 如果是第一天是星期二，则前面的天数为 5
     * 如果是第一天是星期三，则前面的天数为 4
     * 如果是第一天是星期四，则前面的天数为 3
     * 如果是第一天是星期五，则前面的天数为 2
     * 如果是第一天是星期六，则前面的天数为 1
     */
    const x = first - (n === 0 ? 6 : n - 1) * 24 * 3600 * 1000;

    // 从第一天往后得到42天
    for (let i = 0; i <= 42; i++) {
      days.push(new Date(x + i * 24 * 3600 * 1000));
    }

    return days;
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
          {/* 周 */}
          <div className={mergeClass("week")}>
            {HelperDate.range(1, 7).map((i: keyof typeof mapWeek) => {
              return (
                <span key={i} className={mergeClass("week-days")}>
                  {mapWeek[i]}
                </span>
              );
            })}
          </div>

          {/* 日期 */}
          {HelperDate.range(1, 42 / 7).map(i => {
            return (
              <div className={mergeClass("date-line")} key={i}>
                {HelperDate.range(1, 7).map(day => (
                  <span className={mergeClass("date-cell")} key={day}>
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
  const onClickDay = () => setMode("days");

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
            <span onClick={onClickYear}>{year} 年</span>
            <span onClick={onClickMonth}>{month} 月</span>
          </div>
          <div className="right-action">
            <Icon size="12" name="arrow_right" color="#8e8e93" />
            <Icon size="12" name="page_last" color="#8e8e93" />
          </div>
        </div>
        <div className={mergeClass("panels")}>{renderContent()}</div>
        <div className={mergeClass("actions")}>
          <span onClick={onClickDay}>今天</span>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
