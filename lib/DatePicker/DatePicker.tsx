import React, { useEffect, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-date-picker");

import "./datePicker.scss";

const DatePicker = () => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [visibleDays, setVisibleDays] = useState<number[]>([]); // 可见的天数

  useEffect(() => {
    const date = new Date(2018, 2, 28);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    console.log(firstDay, lastDay, "23232");
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
