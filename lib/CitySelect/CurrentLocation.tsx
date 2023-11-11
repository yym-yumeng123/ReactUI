import React, { useEffect, useState } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-city-dialog");

const CurrentLocation = () => {
  const [currentCity, setCurrentCity] = useState("加载中...");

  useEffect(() => {
    const XHR = new XMLHttpRequest();
    XHR.open("get", "http://ip-api.com/json/?lang=zh-CN");
    XHR.onload = () => {
      const string = XHR.responseText;
      const { city } = JSON.parse(string);
      setCurrentCity(city)
    };
    XHR.onerror = (err) => {
      if (err) {
        setCurrentCity("未知")
      }
    }
    XHR.send();
  }, []);

  return <div className={mergeClass("currentCity")}>当前城市: {currentCity}</div>;
};

export default CurrentLocation;
