import React, { useEffect, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

import HelperDate from "./helper";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-date-picker");

import "./datePicker.scss";

const DatePicker = () => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [visibleDays, setVisibleDays] = useState<number[]>([]); // 可见的天数

  useEffect(() => {
    const frontDays = [];
    const currentDays = [];
    const laterDays = [];

    const date = new Date();
    const first = HelperDate.firstDayOfMonth(date);
    const last = HelperDate.lastDayOfMonth(date);
    const [year, month, day] = HelperDate.getYearMonthDate(date);
    for (let i = first.getDate(); i <= last.getDate(); i++) {
      currentDays.push(new Date(year, month, i));
    }

    // 前面有几天
    const n = first.getDay() === 0 ? 6 : first.getDay() - 1;

    for (let i = 0; i <= n; i++) {
      frontDays.unshift(new Date(year, month, -i));
    }

    // 后面剩几天
    const m = 42 - currentDays.length - frontDays.length;
    for (let i = 1; i <= m; i++) {
      laterDays.push(new Date(year, month + 1, i));
    }

    const finallyDays = [...frontDays, ...currentDays, ...laterDays]

    console.log(currentDays, frontDays,laterDays,finallyDays, "array...");
  }, []);

  const renderContent = () => {
    const mapMode = {
      days: <div className={mergeClass("content")}>日</div>,
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
          <Icon size="14" name="page_first" />
          <Icon size="14" name="arrow-left-bold" />
          <span onClick={onClickYear}>2020年</span>
          <span onClick={onClickMonth}>8月</span>
          <Icon size="14" name="arrow-right-bold" />
          <Icon size="14" name="page_last" />
        </div>
        <div className={mergeClass("panels")}>{renderContent()}</div>
        <div className={mergeClass("actions")}></div>
      </div>
    </>
  );
};

export default DatePicker;
