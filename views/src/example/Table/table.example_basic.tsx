import React, { useState } from "react";
import Table from "lib/Table/table";
import { dataBasic } from "./config";
import { Button } from "lib";
import toast from "lib/Toast/toast";

const TableExampleBasic = () => {
  const [columns] = useState([
    {
      title: "姓名",
      key: "name",
      width: 100,
    },
    {
      title: "年龄",
      key: "age",
      width: 200,
    },
    {
      title: "住址",
      key: "address",
    },
    {
      title: "操作",
      key: "action",
      width: 200,
      render: (_: string, record: any) => {
        return (
          <Button level="danger" onClick={() => handleDelete(record)}>
            删除
          </Button>
        );
      },
    },
  ]);

  const handleDelete = (record: any) => {
    toast({
      content: `${record.name} 删除成功`,
    });
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataBasic} />
    </div>
  );
};

export default TableExampleBasic;
