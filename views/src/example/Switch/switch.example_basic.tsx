import React, { useState } from "react";
import Switch from "lib/Switch/switch";

const SwitchBasicExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: boolean) => {
    console.log("我1s后再变化", value);
    setTimeout(() => {
      setChecked(!checked);
    }, 1000);
  };
  return (
    <div className="yui-switch-example">
      <Switch checked={checked} onChange={handleChange} />
      <Switch checked />
      <Switch checked={false} />
      <Switch checked disabled />
      <Switch checked={false} disabled />
    </div>
  );
};

export default SwitchBasicExample;
