import React, { FC, useContext } from "react";
import ReactDOM from "react-dom";
import Icon from "lib/Icon/icon";
import CurrentLocation from "./CurrentLocation";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import { CitySelectContext } from "./CitySelect";
import "./city.scss";

const mergeClass = addPrefixAndMergeClass("yui-city-dialog");

const CityDialog: FC<{ onClose: () => void; data: string[] }> = ({
  onClose,
}) => {
  const CITYMAP = useContext(CitySelectContext);
  const AllCityList = Object.entries(CITYMAP!.map).sort(
    (a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)
  );

  const onClick = (city: string) => {
    CITYMAP?.onChange(city);
    onClose()
  };

  const handleScroll =(i: string) => {
    document.querySelector(`[data-letter="${i}"]`)?.scrollIntoView()
  }

  return ReactDOM.createPortal(
    <>
      <div className={mergeClass("")}>
        <header>
          <Icon name="close" color="#000" style={{marginLeft: '8px', fontSize: '14px'}} onClick={onClose} />
          <span>选择城市</span>
          <i />
        </header>
        <CurrentLocation />
        <section className={mergeClass("cityWord")}>
          <h2>全部城市</h2>
          <div className={mergeClass("cityWord-cityIndex")}>
            {Object.keys(CITYMAP!.map)
              .sort()
              .map((i) => (
                <li onClick={() => handleScroll(i)} key={i}>{i}</li>
              ))}
          </div>
        </section>
        <section className={mergeClass("allCity")}>
          <h2>所有城市</h2>
          {AllCityList.map(([letter, list]) => {
            return (
              <div key={letter} className={mergeClass("allCity-section")}>
                <h4 data-letter={letter}>{letter}</h4>
                {list.map((city) => (
                  <div
                    className={mergeClass("cityName")}
                    onClick={() => onClick(city)}
                    key={city}
                  >
                    {city}
                  </div>
                ))}
              </div>
            );
          })}
        </section>
      </div>
      <div className={mergeClass("mask")} />
    </>,
    document.body
  );
};

export default CityDialog;
