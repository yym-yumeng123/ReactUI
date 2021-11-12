import React from "react";
import Popover from "lib/Popover/popover";
import Button from "lib/Button/button";

const PopoverPositionExample = () => {
  return (
    <>
      <Popover content="默认在上面">
        <Button level="primary">按钮</Button>
      </Popover>

      <Popover content="我是右边" placement="right">
        <Button level="primary">按钮右</Button>
      </Popover>

      <Popover content="我是下面" placement="bottom">
        <Button level="primary">按钮下</Button>
      </Popover>

      <Popover content="我是左边" placement="left">
        <Button level="primary">按钮左</Button>
      </Popover>
    </>
  );
};

export default PopoverPositionExample;
