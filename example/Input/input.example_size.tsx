import React, { ChangeEventHandler, useState } from "react";
import Input from "lib/Input/Input";

const InputSizeExample = () => {
  const [val, setVal] = useState<string>("");
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setVal(value);
    console.log(value, "3223");
  };
  return (
    <>
      <div className="item">
        <Input placeholder="我是lg" size="lg" value={val} onChange={onChange} />
      </div>
      <div className="item">
        <Input placeholder="我是sm" size="sm" />
      </div>
      <div className="item">
        <Input placeholder="我是ls" size="xs" />
      </div>
    </>
  );
};

export default InputSizeExample;
