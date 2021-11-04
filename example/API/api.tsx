import React, { ReactElement } from "react";
import Table from "lib/Table/table";
import {
  columns,
  Api_Data_Icon,
  Api_Data_Button,
  Api_Data_Card,
  Api_Data_Dialog,
  Api_Data_Layout,
  Api_Data_Toast
} from "./config";

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
    button: Api_Data_Button,
    card: Api_Data_Card,
    dialog: Api_Data_Dialog,
    layout: Api_Data_Layout,
    toast: Api_Data_Toast
  };

  return (
    <div>
      <Table columns={columns} dataSource={MAP[type]} />
    </div>
  );
};

export default API;
