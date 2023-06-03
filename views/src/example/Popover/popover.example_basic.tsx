import React from "react";
import Popover from "lib/Popover/popover";
import Button from "lib/Button/button";

const PopoverBasicExample = () => {
  return (
    <>
      <Popover
        content={
          <strong>
            我是比较多的内容我是比较多的内容我是比较多的内容我是比较多的内容我是比较多的内容
          </strong>
        }
        title="标题"
        trigger="click"
      >
        <Button level="primary">内容多的显示</Button>
      </Popover>

      <Popover content="我是内容" title="标题" trigger="click">
        <Button level="primary">正常显示</Button>
      </Popover>

      <Popover content="我是内容" title="标题">
        <Button level="primary">hover 显示</Button>
      </Popover>
    </>
  );
};

export default PopoverBasicExample;
