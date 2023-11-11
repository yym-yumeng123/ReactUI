import React, { FC } from "react";
import ReactDOM from "react-dom";
import CurrentLocation from "./CurrentLocation";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./city.scss";

const mergeClass = addPrefixAndMergeClass("yui-city-dialog");

const CityDialog: FC<{ onClose: () => void, data: string[] }> = ({ onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className={mergeClass("")} onClick={onClose}>
        <header>
          <span>选择城市</span>
        </header>
        <CurrentLocation />
        <h2>全部城市</h2>
        <div className={mergeClass("cityIndex")}>ABCD...</div>
        <div className={mergeClass("cityList")}>所有城市</div>
      </div>
      <div className={mergeClass("mask")} />
    </>,
    document.body
  );
};

export default CityDialog;
