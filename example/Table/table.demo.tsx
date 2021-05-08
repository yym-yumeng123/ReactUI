import React, { useState } from "react";
import Table from "lib/Table/table";

const TableDemo = () => {
  const [columns, setcColumns] = useState([
    {
      title: "姓名",
      key: "name",
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
  const [dataSource, setDataSource] = useState<Array<any>>([
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
    }
  ]);

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default TableDemo;
