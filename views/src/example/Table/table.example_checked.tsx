import React, { useState } from "react";
import Table from "lib/Table/table";
import { Button } from "lib";
import Popover from "lib/Popover/popover";
import toast from "lib/Toast/toast";
import { dataBasic } from "./config";

const TableExampleCheck = () => {

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

  const onSelecteItems = (val: any) => {
    console.log(val, "选中的数据");
  };

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
        changeSeletedItems={onSelecteItems}
        selectedItems={dataSource.slice(0, 2)}
        bordered
        checkable
      />
    </div>
  );
};

export default TableExampleCheck;
