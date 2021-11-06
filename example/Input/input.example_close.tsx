import React, { ChangeEventHandler, useState } from "react";
import Input from "lib/Input/Input";

const InputBasicExample = () => {
  const [val, setVal] = useState<string>("");
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setVal(value);
  };

  const handleClear = () => {
    setVal('');
  }
  return (
    <div>
      <Input placeholder="请输入..."  value={val} onChange={onChange} />
      <Input placeholder="可以清空内容"  value={val} onChange={onChange} closable onClear={handleClear} />
    </div>
  );
};

export default InputBasicExample;
