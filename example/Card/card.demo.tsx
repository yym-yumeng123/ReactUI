import React from "react";
import Card from "lib/Card/card";
import { Button } from "lib";

const CardDemo = () => {
  return (
    <>
      <Card title="我是默认标题">我是内容</Card>
      <br />
      <Card title="我是带额外的元素的标题" extra={<Button level="primary">更多...</Button>}>
        我是内容
      </Card>
      <br />
      <Card title="我是可以嵌套的卡片" extra={<Button level="primary">更多...</Button>}>
        <Card
          title="我是标题2"
          extra={<Button level="primary">更多...</Button>}
        >
          我是内容
        </Card>
      </Card>
    </>
  );
};

export default CardDemo;
