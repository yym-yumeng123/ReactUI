import React, { useRef } from "react";
import Input from "lib/Input/Input";

const InputDisabledExample = () => {
  const value = useRef("我是输入的值");

  return (
    <>
      <div className="item">
        <Input placeholder="请输入" value={value.current} disabled />
      </div>
      <div className="item">
        <Input placeholder="请输入, 我是 lg 的 size" disabled size="lg" />
      </div>
    </>
  );
};

export default InputDisabledExample;
