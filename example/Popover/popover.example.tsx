import React from "react";
import Popover from "lib/Popover/popover";
import Button from "lib/Button/button";

const PopoverExample = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        border: "1px solid red",
        overflow: "hidden"
      }}
    >
      <Popover content={<em>内容</em>} title="我是标题">
        <Button level="primary">按钮</Button>
      </Popover>
    </div>
  );
};

export default PopoverExample;
