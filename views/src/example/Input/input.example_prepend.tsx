import React, { ChangeEventHandler, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

const InputPrependExample = () => {
  const [val, setVal] = useState("");
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setVal(value);
  };

  return (
    <>
      <div className="item">
        <Input
          placeholder="请输入名称"
          prepend="https://"
          value={val}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <Input
          placeholder="请输入名称"
          prepend={<em style={{ color: "red" }}>中国</em>}
        />
      </div>
      <div className="item">
        <Input
          placeholder="请输入名称"
          prepend={<Icon name="social_github" size="14" />}
        />
      </div>
      <div className="item">
        <Input
          disabled
          placeholder="请输入名称"
          prepend={<Icon name="social_github" size="14" />}
        />
      </div>
    </>
  );
};

export default InputPrependExample;
