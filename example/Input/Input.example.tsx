import React, {ChangeEvent, useState} from "react";
import Input from "lib/Input/Input";

const InputExample = () => {
  const [val, setVal] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    // @ts-ignore
    setVal(value);
  };
  const clearValue = () => {
    console.log('我会掉了...');

    setVal('')
  }
  return (
    <div>
      <h1>Default</h1>
      <Input/>
      <h1>Placeholder</h1>
      <Input placeholder="请输入名称" onChange={onChange} value={val} onClear={clearValue} closable/>
      <h1>Size</h1>
      <Input placeholder="lg" size="lg"/>
      <Input placeholder="sm" size="sm"/>
      <Input placeholder="ls" size="xs"/>
      <h1>Disabled</h1>
      <Input placeholder="请输入" disabled/>
      <Input placeholder="请输入" disabled size="lg"/>
      {/* <h1>Icon</h1>
      <Input placeholder="请输入名称" icon="search"/>
      <Input placeholder="请输入名称" icon="view"/>
      <Input placeholder="请输入名称" icon="user"/> */}
      <h1>Prepand</h1>
      <br/>
      <Input placeholder="请输入名称" prepend="你好"/>
      <br />
      <Input placeholder="请输入名称" prepend={<em style={{color: "red"}}>你好</em>}/>
      <br />

      <Input placeholder="请输入名称" prepend={<em style={{color: "red"}}>你好</em>} disabled={true}/>
      <h1>append</h1>
      <br/>
      <Input placeholder="请输入名称" append="后面"/>
      <br />
      <Input placeholder="请输入名称" append="后面" disabled={true}/>
      <br/>
      <h1>append & prepend</h1>
      <Input placeholder="请输入名称" prepend="https://www" append=".com"/>
      <br />
      <Input placeholder="请输入名称" prepend="https://" append=".com" disabled={true}/>

      <h1>value</h1>
      <Input defaultValue="我是默认值" onChange={onChange}/>
      <span>{val}</span>
    </div>
  );
};

export default InputExample;
