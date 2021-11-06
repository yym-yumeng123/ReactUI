import React from "react";
import Input from "lib/Input/Input";

const InputExample = () => {
  return (
    <div>
      <Input placeholder="请输入名称" prepend="https://www." append=".com" />
      <Input
        placeholder="请输入名称"
        prepend="https://"
        append=".com"
        disabled={true}
      />
    </div>
  );
};

export default InputExample;
