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
    </div>
  );
};

export default PopoverExample;
