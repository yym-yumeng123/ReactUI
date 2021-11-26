import React, { useState } from "react";
import Table from "lib/Table/table";

const TableDemo = () => {
  const [current, setCurrent] = useState(1);

  const [columns] = useState([
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
  const [dataSource, setDate] = useState([
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

  const [selectedRows, setSelectedRows] = useState([])

  const handleChange = (n: number) => {
    setCurrent(n);
  };

  const onSelecteItems = (val: any) => {
    console.log(val, "2323");
    setSelectedRows(val)
  };

  return (
    <div>
      <Table
        changeSeletedItems={onSelecteItems}
        selectedRows={selectedRows}
        columns={columns}
        dataSource={dataSource}
      />
      {/* <br />
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pager={{ current, totalPage: 100, onChange: handleChange }}
      />
      <br />
      <Table columns={columns} dataSource={[]} bordered compact />

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
