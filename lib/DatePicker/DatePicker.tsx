import React, { FC, useEffect, useMemo, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

import HelperDate from "./helper";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-date-picker");

import "./datePicker.scss";

interface DateProps {
  value?: Date;
  onChange?: (val: Date) => void;
}

const DatePicker: FC<DateProps> = props => {
  const { value, onChange } = props;

  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [year, setYear] = useState<number>(1970);
  const [month, setMonth] = useState<number>(1);
  // const [visibleDays, setVisibleDays] = useState<number[]>([]); // 可见的天数

  useEffect(() => {
    console.log(allDates, "34343");
  }, []);

  // 获取总共 42 天的数组
  const allDates = useMemo(() => {
    const days: any[] = [];
    const date = value || new Date();
    const first = HelperDate.firstDayOfMonth(date); // 一个月的第一天
    const [year, month] = HelperDate.getYearMonthDate(date); // 当天的年月日
    setYear(year);
    setMonth(month + 1);

    /**
     * @description getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天
     */
    const n = first.getDay();

    /**
     * 如果是第一天是星期一 n = 1，则前面的天数为 0
     * 如果是第一天是星期二 n =2 ，则前面的天数为 1
     * 如果是第一天是星期三，则前面的天数为 2
     * 如果是第一天是星期四，则前面的天数为 3
     * 如果是第一天是星期五，则前面的天数为 4
     * 如果是第一天是星期六 n = 6，则前面的天数为 5
     * 如果是第一天是星期日 n = 0，则前面的天数为 6
     * @return 返回第一个日期
     */
    const theFirstDate =
      new Date(first).getTime() - (n === 0 ? 6 : n - 1) * 24 * 3600 * 1000;

    // 从第一天往后得到42天
    for (let i = 0; i < 42; i++) {
      days.push(new Date(theFirstDate + i * 24 * 3600 * 1000));
    }

    return days;
  }, [value]);

  const handleClickDay = (j: number, i: number) => {
    // .toUTCString()        Fri, 19 Aug 2022 16:00:00 GMT
    // .toTimeString()       00:00:00 GMT+0800 (中国标准时间)
    // .toDateString()       Sat Aug 20 2022
    // .toISOString()        2022-08-19T16:00:00.000Z
    // .toLocaleDateString() 2022/8/20
    // .toLocaleString()     2022/8/20 00:00:00
    // .toLocaleTimeString() 00:00:00
    onChange && onChange(getVisibleDay(i, j));
  };

  const formattedValue = (val: Date): string => {
    const [year, month, day] = HelperDate.getYearMonthDate(val);
    return `${year}-${month + 1}-${day}`;
  };

  // 得到可见天数
  const getVisibleDay = (col: number, row: number) =>
    allDates[(col - 1) * 7 + row - 1];

  /**
   * @returns 只要年或者月有一个不相等, 就返回true, 不是当前
   */
  const isCurrentMonth = (date: Date) => {
    const [year1, month1] = HelperDate.getYearMonthDate(date);
    const [year2, month2] = HelperDate.getYearMonthDate(value || new Date());
    return year1 !== year2 || month1 !== month2;
  };

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
                  <span
                    className={mergeClass({
                      "date-cell": true,
                      "current-month": isCurrentMonth(getVisibleDay(i, day))
                    })}
                    key={day}
                    onClick={() => handleClickDay(day, i)}
                  >
                    {getVisibleDay(i, day).getDate()}
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
      <Input value={value ? formattedValue(value) : ""} />
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
