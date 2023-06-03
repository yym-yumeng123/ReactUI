import React, { ChangeEventHandler, useState } from "react";
import Input from "lib/Input/Input";
import Icon from "lib/Icon/icon";

const InputAppendExample = () => {
  const [val, setVal] = useState("");
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setVal(value);
  };

  return (
    <div>
      <div className="item">
        <Input placeholder="请输入名称" append="后面" />
      </div>
      <div className="item">
        <Input placeholder="请输入名称" append="加油" disabled={true} />
      </div>
      <div className="item">
        <Input
          placeholder="请输入名称"
          append="@qq.com"
          value={val}
          onChange={onChange}
        />
      </div>
      <div className="item">
        <Input
          placeholder="请输入名称"
          append={<em style={{ color: "red" }}>中国</em>}
        />
      </div>
      <div className="item">
        <Input
          placeholder="请输入名称"
          append={<Icon name="search" size="14" />}
        />
      </div>
    </div>
  );
};

export default InputAppendExample;
