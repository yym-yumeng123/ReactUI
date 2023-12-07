import React, { useState } from "react";
import DatePicker from "lib/DatePicker/DatePicker";

const DatePickerExample = () => {
  const [value, setValue] = useState(new Date());
  const onChange = (val: Date) => {
    setValue(val);
  };
  return <DatePicker value={value} onChange={onChange} />;
};

export default DatePickerExample;
