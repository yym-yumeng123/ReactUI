import React, { FC, useMemo, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";
import HelperDate, { WeekDay } from "./helper";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import helper from "./helper";
import "./datePicker.scss";

const mergeClass = addPrefixAndMergeClass("yui-date-picker");

interface DateProps {
  value?: Date;
  onChange?: (val: Date) => void;
}

const DatePicker: FC<DateProps> = (props) => {
  const { value = new Date(), onChange } = props;
  const [year, month] = HelperDate.getYearMonthDate(value); // 获取传入的年月

  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [dispalyYearAndMonth, setDisplayYearAndMonth] = useState<
    Record<"year" | "month", number>
  >({ year, month });

  /**
   * @returns 只要年或者月有一个不相等, 就返回true, 不是当前
   */
  const isCurrentMonth = (date: Date) => {
    const [year, month] = HelperDate.getYearMonthDate(date);
    return year !== dispalyYearAndMonth.year || month !== dispalyYearAndMonth.month
  };

  // 获取显示在页面的总共 42 天的数组
  const allDates = useMemo(() => {
    const date = new Date(dispalyYearAndMonth.year, dispalyYearAndMonth.month, 1)
    const days: any[] = [];
    const first = HelperDate.firstDayOfMonth(date); // 一个月的第一天
    const n = first.getDay(); // 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天

    /**
     * 如果是第一天是星期一 n = 1，则前面的天数为 0
     * 如果是第一天是星期二 n =2 ，则前面的天数为 1
     * 如果是第一天是星期三，则前面的天数为 2
     * 如果是第一天是星期四，则前面的天数为 3
     * 如果是第一天是星期五，则前面的天数为 4
     * 如果是第一天是星期六 n = 6，则前面的天数为 5
     * 如果是第一天是星期日 n = 0，则前面的天数为 6
     * @return 返回这个月显示在面板上的第一个日期
     */
    const theFirstDate =
      new Date(first).getTime() - (n === 0 ? 6 : n - 1) * 24 * 3600 * 1000;

    // 从第一天往后得到42天
    for (let i = 0; i < 42; i++) {
      days.push(new Date(theFirstDate + i * 24 * 3600 * 1000));
    }

    return days;
  }, [dispalyYearAndMonth]);

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
  const getVisibleDay = (col: number, row: number) => {
    return allDates[(col - 1) * 7 + row - 1];
  };

  const onClickYear = () => setMode("years");
  const onClickMonth = () => setMode("months");
  const onClickDay = () => setMode("days");

  const onClickPrevYear = () => {
    const oldDate = new Date(
      dispalyYearAndMonth.year,
      dispalyYearAndMonth.month
    );
    const newDate = helper.addYear(oldDate, -1);
    const [year, month] = helper.getYearMonthDate(newDate);
    setDisplayYearAndMonth((dispalyYearAndMonth) => {
      return {
        ...dispalyYearAndMonth,
        month,
        year,
      };
    });
  };
  const onClickPrevMonth = () => {
    const oldDate = new Date(
      dispalyYearAndMonth.year,
      dispalyYearAndMonth.month
    );
    const newDate = helper.addMonth(oldDate, -1);
    const [year, month] = helper.getYearMonthDate(newDate);
    setDisplayYearAndMonth((dispalyYearAndMonth) => {
      return {
        ...dispalyYearAndMonth,
        month,
        year,
      };
    });
  };
  const onClickNextMonth = () => {
    const oldDate = new Date(
      dispalyYearAndMonth.year,
      dispalyYearAndMonth.month
    );
    const newDate = helper.addMonth(oldDate, 1);
    const [year, month] = helper.getYearMonthDate(newDate);
    setDisplayYearAndMonth((dispalyYearAndMonth) => {
      return {
        ...dispalyYearAndMonth,
        month,
        year,
      };
    });
  };
  const onClickNextYear = () => {
    const oldDate = new Date(
      dispalyYearAndMonth.year,
      dispalyYearAndMonth.month
    );
    const newDate = helper.addYear(oldDate, 1);
    const [year, month] = helper.getYearMonthDate(newDate);
    setDisplayYearAndMonth((dispalyYearAndMonth) => {
      return {
        ...dispalyYearAndMonth,
        month,
        year,
      };
    });
  };

  const renderContent = () => {
    const mapWeek = {
      [WeekDay.Monday]: "一",
      [WeekDay.Thesday]: "二",
      [WeekDay.Wednesday]: "三",
      [WeekDay.Thursday]: "四",
      [WeekDay.Friday]: "五",
      [WeekDay.Saturday]: "六",
      [WeekDay.Sunday]: "日",
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
          {HelperDate.range(1, 42 / 7).map((i) => {
            return (
              <div className={mergeClass("date-line")} key={i}>
                {HelperDate.range(1, 7).map((day) => (
                  <span
                    className={mergeClass({
                      "date-cell": true,
                      "current-month": isCurrentMonth(getVisibleDay(i, day)),
                      // "select-date":
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
      years: <div className={mergeClass("content")}>年</div>,
    };

    return mapMode[mode];
  };

  return (
    <>
      <Input value={value ? formattedValue(value) : ""} />
      <div className={mergeClass("pop")}>
        {/* 导航 */}
        <div className={mergeClass("nav")}>
          <div className="left-action">
            <Icon
              size="12"
              name="page_first"
              color="#8e8e93"
              onClick={onClickPrevYear}
            />
            <Icon
              onClick={onClickPrevMonth}
              name="arrow_right"
              style={{
                transform: "rotate(180deg)",
                fontSize: "12px",
                fill: "#8e8e93",
              }}
            />
          </div>
          <div className="date-wrap">
            <span onClick={onClickYear}>{dispalyYearAndMonth.year} 年</span>
            <span onClick={onClickMonth}>
              {dispalyYearAndMonth.month + 1} 月
            </span>
          </div>
          <div className="right-action">
            <Icon
              size="12"
              name="arrow_right"
              color="#8e8e93"
              onClick={onClickNextMonth}
            />
            <Icon
              size="12"
              name="page_last"
              color="#8e8e93"
              onClick={onClickNextYear}
            />
          </div>
        </div>
        {/* 日期面板 */}
        <div className={mergeClass("panels")}>{renderContent()}</div>
        {/* 今天 */}
        <div className={mergeClass("actions")}>
          <span onClick={onClickDay}>今天</span>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
