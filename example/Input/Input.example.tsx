import React, {ChangeEvent, useState} from "react";
import Input from "lib/Input/Input";

const InputExample = () => {
  const [val, setVal] = useState(0);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    // @ts-ignore
    setVal(value);
  };
  return (
    <div>
      <h1>Default</h1>
      <Input/>
      <h1>Placeholder</h1>
      <Input placeholder="请输入名称"/>
      <h1>Size</h1>
      <Input placeholder="lg" size="lg"/>
      <Input placeholder="md" size="md"/>
      <Input placeholder="sm" size="sm"/>
      <Input placeholder="ls" size="xs"/>
      <h1>Disabled</h1>
      <Input placeholder="请输入" disabled={true}/>
      <Input placeholder="请输入" disabled={true} size="lg"/>
      <h1>Icon</h1>
      <Input placeholder="请输入名称" icon="search"/>
      <Input placeholder="请输入名称" icon="view"/>
      <Input placeholder="请输入名称" icon="user"/>
      <h1>Prepand</h1>
      <br/>
      <Input placeholder="请输入名称" prepand="你好"/>
      <Input placeholder="请输入名称" prepand={<em style={{color: "red"}}>你好</em>}/>
      <Input placeholder="请输入名称" prepand={<em style={{color: "red"}}>你好</em>} disabled={true}/>
      <h1>append</h1>
      <br/>
      <Input placeholder="请输入名称" append="后面"/>
      <Input placeholder="请输入名称" append="后面" disabled={true}/>
      <br/>
      <Input placeholder="请输入名称" prepand="https://www" append=".com"/>
      <Input placeholder="请输入名称" prepand="https://" append=".com" disabled={true}/>

      <h1>value</h1>
      <Input defaultValue="我是默认值" onChange={onChange}/>
      <span>{val}</span>
    </div>
  );
};

export default InputExample;
