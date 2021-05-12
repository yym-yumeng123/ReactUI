import React, { useState } from "react";
import Table from "lib/Table/table";

const TableDemo = () => {
  const [columns, setcColumns] = useState([
    {
      title: "姓名",
      key: "name",
      render: (text: any, record: object, index: number) => {
        console.log(text, record, index);

      }
    },
    {
      title: "年龄",
      key: "age"
    },
    {
      title: "住址",
      key: "address"
    }
  ]);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    },
    {
      key: "3",
      name: "胡一同",
      age: 33,
      address: "西湖区湖底公园2号"
    },
    {
      key: "4",
      name: "胡东西",
      age: 32,
      address: "西湖区湖底公2323号"
    }
  ]);

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
      <br />
      <Table columns={columns} dataSource={dataSource} bordered />

      <br />
      <Table columns={columns} dataSource={dataSource} bordered compact />

      <br/>
      <Table columns={columns} dataSource={dataSource} bordered compact striped={false} />

    </div>
  );
};

export default TableDemo;
