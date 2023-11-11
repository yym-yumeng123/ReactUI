import React from "react";
import CitySelect from "lib/CitySelect/CitySelect";
import { cityData } from "./cityList";

const CitySelectExample = () => {
  return <CitySelect dataSource={cityData}>点我</CitySelect>;
};

export default CitySelectExample;
