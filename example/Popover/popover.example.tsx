import React from "react";
import Popover from "lib/Popover/popover";
import Button from "lib/Button/button";

const PopoverExample = () => {
  return (
    <div>
      <Popover content={<em>aaaaaaaaaaa</em>} title="我是标题">
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
    </div>
  );
};

export default PopoverExample;
