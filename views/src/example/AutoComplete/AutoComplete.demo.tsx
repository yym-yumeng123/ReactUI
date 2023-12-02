import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";
import CardDefaultExample from "./AutoComplete.example";
import AutoCompleteSyncExample from './AutoComplete.example_sync'
const AutoCompleteDefaultDemo = require("!!raw-loader!./AutoComplete.example.tsx");
const AutoCompleteSynctDemo = require("!!raw-loader!./AutoComplete.example_sync.tsx");

const AutoCompleteDemo = () => {
  return (
    <>
      <Demo code={AutoCompleteDefaultDemo.default}>
        <CardDefaultExample />
      </Demo>

      <Demo code={AutoCompleteSynctDemo.default}>
        <AutoCompleteSyncExample />
      </Demo>

      <Card title="API">
        <API type="autoComplete" />
      </Card>
    </>
  );
};

export default AutoCompleteDemo;
