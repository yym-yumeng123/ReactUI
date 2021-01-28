import React from "react";
import Input from "lib/Input/Input";

const InputExample = () => {
  return (
    <div>
      <h1>Default</h1>
      <Input />
      <h1>Placeholder</h1>
      <Input placeholder="请输入名称" />
      <h1>Size</h1>
      <Input placeholder="lg" size="lg" />
      <Input placeholder="md" size="md" />
      <Input placeholder="sm" size="sm" />
      <Input placeholder="ls" size="xs" />
      <h1>Disabled</h1>
      <Input placeholder="请输入" disabled={true} />
      <Input placeholder="请输入" disabled={true} size="lg" />
      <h1>Icon</h1>
      <Input placeholder="请输入名称" icon="search" />
    </div>
  );
};

export default InputExample;
