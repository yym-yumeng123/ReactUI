import React, { useState } from "react";
import CitySelect from "lib/CitySelect/CitySelect";
import { cityData } from "./cityList";
import toast from "lib/Toast/toast";
import { Button } from "lib";

const CitySelectExample = () => {
  const [city, setCity] = useState("定位中")

  const onSelectCity = (city: string) => {
    toast({ content: `您选择了${city}` });
    setCity(city)
  };

  return (
    <CitySelect dataSource={cityData} onChange={onSelectCity}>
      <Button level="primary">点我选择城市: {city}</Button>
    </CitySelect>
  );
};

export default CitySelectExample;
