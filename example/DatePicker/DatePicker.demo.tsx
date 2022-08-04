import React, { useState } from "react";
import DatePicker from "lib/DatePicker/DatePicker";

const DatePickerDemo = () => {
  const [value, setValue] = useState(new Date());
  const onChange = (val: Date) => {
    setValue(val);
  };
  return (
    <div>
      <DatePicker value={value} onChange={onChange} />
      <DatePicker />
    </div>
  );
};

export default DatePickerDemo;
