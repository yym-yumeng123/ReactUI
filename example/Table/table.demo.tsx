import React, { useState } from "react";
import Table from "lib/Table/table";
import { Button, Icon } from "lib";

import { data } from "./config";
import Popover from "lib/Popover/popover";
import toast from "lib/Toast/toast";

const TableDemo = () => {
  // const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);

  const [columns] = useState([
    {
      title: "姓名",
      key: "name",
      width: 100
      // render: (text: any, record: object, index: number) => {
      //   console.log(text, record, index);
      // }
    },
    {
      title: "年龄",
      key: "age",
      order: "asc",
      sorter: () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setData(dataSource.sort((a, b) => a.age - b.age));
        }, 2000);
      },
      width: 200
    },
    {
      title: "住址",
      key: "address",

      render: (text: string) => {
        return <Popover content={text}>{text}</Popover>;
      }
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
      }
    }
  ]);
  const [dataSource, setData] = useState(data);

  const [selectedRows, setSelectedRows] = useState([]);

  const onSelecteItems = (val: any) => {
    console.log(val, "2323");
    setSelectedRows(val);
  };

  const handleDelete = (record: any) => {
    toast({
      content: `${record.name} 删除成功`
    });
  };

  const empty = (
    <>
      <Icon name="like" />
      <h2>我爱你</h2>
    </>
  );

  return (
    <div>
      <Table
        changeSeletedItems={onSelecteItems}
        selectedRows={selectedRows}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        bordered
        height={400}
        checkable
        expandable
      />
      <br />
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        // pager={{ current, totalPage: 100, onChange: handleChange }}
      />

      <br />
      {/* <Table columns={columns} dataSource={[]} empty={empty} bordered compact /> */}
      <Table columns={columns} dataSource={[]} bordered compact />
      {/*
      <br />
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        compact
        striped={false}
      /> */}
    </div>
  );
};

export default TableDemo;
