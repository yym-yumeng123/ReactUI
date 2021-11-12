import React from "react";
import Popover from "lib/Popover/popover";
import Button from "lib/Button/button";

const PopoverExample = () => {
  const content = (
    <div>
      <a href="#">报读</a>
      <Button>关闭</Button>
    </div>
  )
  return (
    <div>
      <Popover content={<em>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</em>} title="我是标题" trigger="click">
        <Button level="primary">按钮</Button>
      </Popover>

      <br/>

      <Popover content={<em>aaaaaaaaaaa</em>}>
        <Button level="primary">按钮</Button>
      </Popover>

      <br/>
      <Popover content="我是右边" placement="right">
        <Button level="primary">按钮右</Button>
      </Popover>
      <br/>
      <Popover content="我是下面" placement="bottom">
        <Button level="primary">按钮下</Button>
      </Popover>
      <br/>
      <Popover content="我是左边" placement="left">
        <Button level="primary">按钮左</Button>
      </Popover>

      <br/>
      <h2>显示方式: hover | click</h2>
      <br/>
      <Popover content="我是clikc 进来的" trigger="click">
        <Button level="primary">按钮</Button>
      </Popover>
      <br/>
      <Popover content={content} trigger="click">
        <Button level="primary">链接</Button>
      </Popover>
    </div>
  );
};

export default PopoverExample;
