import React, { ReactElement } from "react";
import Table from "lib/Table/table";
import { columns, Api_Data_Icon, Api_Data_Button } from "./config";

interface ApiProps {
  type: string;
}

type mapOption = {
  [key: string]: Array<{
    props: string;
    explain: string;
    type: string | ReactElement;
    defaultValue: string;
    require: boolean | string;
  }>;
};

const API: React.FC<ApiProps> = props => {
  const { type } = props;

  const MAP: mapOption = {
    icon: Api_Data_Icon,
    button: Api_Data_Button
  };

  return (
    <div>
      <h1 className="margin_bottom">API</h1>
      <Table columns={columns} dataSource={MAP[type]} />
    </div>
  );
};

export default API;
