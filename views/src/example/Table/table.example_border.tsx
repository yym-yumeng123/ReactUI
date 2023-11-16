import React, { useState } from "react";
import Table from "lib/Table/table";
import Button from "lib/Button/button";
import Popover from "lib/Popover/popover";
import toast from "lib/Toast/toast";

import { dataBasic } from "./config";

const TableExampleBorder = () => {
  const [columns] = useState([
    {
      title: "姓名",
      key: "name",
      width: 100,
    },
    {
      title: "年龄",
      key: "age",
      order: "asc",
      sorter: (val) => {
        if (val === "asc") {
          setData(
            dataSource.sort((a, b) => (a.age as number) - (b.age as number))
          );
        } else if (val === "desc") {
          setData(
            dataSource.sort((a, b) => (b.age as number) - (a.age as number))
          );
        }
      },
      width: 200,
    },
    {
      title: "住址",
      key: "address",

      render: (text: string) => {
        return <Popover content={text}>{text}</Popover>;
      },
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
  const [dataSource, setData] = useState(dataBasic);

  const handleDelete = (record: any) => {
    toast({
      content: `${record.name} 删除成功`,
    });
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        compact
      />
    </div>
  );
};

export default TableExampleBorder;
