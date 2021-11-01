import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import CardDefaultExample from "./card.exapmple_default";
const codeDefaultDemo = require("!!raw-loader!./card.exapmple_default.tsx");
import CardExtraExample from "./card.example_extra";
const codeExtratDemo = require("!!raw-loader!./card.example_extra.tsx");
import CardNestingExample from "./card.example_nesting";
const CardNestingDemo = require("!!raw-loader!./card.example_nesting.tsx");

const CardDemo = () => {
  return (
    <>
      <Demo code={codeDefaultDemo.default}>
        <CardDefaultExample />
      </Demo>

      <Demo code={codeExtratDemo.default}>
        <CardExtraExample />
      </Demo>

      <Demo code={CardNestingDemo.default}>
        <CardNestingExample />
      </Demo>

      <Card title="API">
        <API type="card" />
      </Card>
    </>
  );
};

export default CardDemo;
