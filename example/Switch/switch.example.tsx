import React, { useState } from "react";
import Switch from "lib/Switch/switch";

const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: boolean) => {
    setChecked(!checked)
  }
  return (
    <div>
      <Switch checked={checked} onChange={handleChange}  />
      <Switch checked disabled />
      <Switch checked={false} disabled />
    </div>
  );
};

export default SwitchExample;
