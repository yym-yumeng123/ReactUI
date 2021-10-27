import React, { ReactElement } from "react";
import Table from "lib/Table/table";

interface ApiProps {
  data: Array<{
    props: string;
    explain: string;
    type: string | ReactElement;
    defaultValue: string;
    require: boolean | string
  }>;
}

const API: React.FC<ApiProps> = props => {
  const { data } = props;
  const columns = [
    {
      title: "属性",
      key: "props"
    },
    {
      title: "说明",
      key: "explain"
    },
    {
      title: "类型",
      key: "type",
      render: (text: any, record: object, index: number) => {
        console.log(text, record, index, '丁金凤赛精工的');
        return <div style={{color: 'red'}}>text</div>;
      }
    },
    {
      title: "默认值",
      key: "defaultValue"
    },
    {
      title: '必填',
      key: 'require'
    }
  ];

  return (
    <div>
      <h1 style={{marginTop: '10px'}}>API</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default API;
