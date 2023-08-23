import React, { ReactElement } from "react";
import Table from "lib/Table/table";
import {
  columns,
  Api_Data_Icon,
  Api_Data_Button,
  Api_Data_Card,
  Api_Data_Dialog,
  Api_Data_Layout,
  Api_Data_Toast,
  Api_Data_Grid,
  Api_Data_Input,
  Api_Data_Tabs,
  Api_Data_Collapse,
  Api_Data_Popover,
  Api_Data_Pager,
  Api_Data_Switch,
  Api_Data_Carousel,
  Api_Data_Radio,
  Api_Data_Checkbox,
  Api_Data_Slider
} from "./config";

interface ApiProps {
  type: string;
}

type mapOption = Record<
  string,
  Array<{
    props: string;
    explain: string;
    type: string | ReactElement;
    defaultValue: string;
    require: boolean | string;
  }>
>;

const API: React.FC<ApiProps> = (props) => {
  const { type } = props;

  const MAP: mapOption = {
    icon: Api_Data_Icon,
    button: Api_Data_Button,
    card: Api_Data_Card,
    dialog: Api_Data_Dialog,
    layout: Api_Data_Layout,
    toast: Api_Data_Toast,
    grid: Api_Data_Grid,
    input: Api_Data_Input,
    tabs: Api_Data_Tabs,
    collapse: Api_Data_Collapse,
    popover: Api_Data_Popover,
    pager: Api_Data_Pager,
    switch: Api_Data_Switch,
    radio: Api_Data_Radio,
    slider: Api_Data_Slider,
    carousel: Api_Data_Carousel,
    checkbox: Api_Data_Checkbox,
  };

  return (
    <div>
      <Table columns={columns} dataSource={MAP[type]} />
    </div>
  );
};

export default API;
