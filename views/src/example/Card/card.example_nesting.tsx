import React from "react";
import Card from "lib/Card/card";
import { Button } from "lib";

const CardNestingExample = () => {
  return (
    <Card
    title="我是可以嵌套的卡片"
    extra={<Button level="primary">更多...</Button>}
  >
    <Card
      title="我是里面的卡片"
    >
      我是内容
    </Card>
  </Card>
  );
};

export default CardNestingExample;
