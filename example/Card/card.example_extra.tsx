import React from "react";
import Card from "lib/Card/card";
import { Button } from "lib";

const CardExtraExample = () => {
  return (
    <Card
      title="我是带额外的元素的标题"
      extra={<Button level="primary">更多...</Button>}
    >
      我是内容
    </Card>
  );
};

export default CardExtraExample;
