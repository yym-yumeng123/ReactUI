import React, { useState } from "react";
import Switch from "lib/Switch/switch";

const SwitchSizeExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: boolean) => {
    setChecked(!checked);
  };
  return (
    <div className="yui-switch-example">
      <Switch checked={checked} onChange={handleChange} size="lg" />
      <Switch checked size="sm" />
    </div>
  );
};

export default SwitchSizeExample;
