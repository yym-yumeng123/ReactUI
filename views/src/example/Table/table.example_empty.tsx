import React, { useState } from "react";
import Table from "lib/Table/table";
import { Button, Icon } from "lib";

import Popover from "lib/Popover/popover";

const TableExampleEmpty = () => {
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

      render: (text: string) => {
        return <Popover content={text}>{text}</Popover>;
      },
    },
  ]);
  const [loading, setLoading] = useState(false)

  const empty = (
    <>
      <Icon name="like" />
      <h2>我爱你</h2>
    </>
  );

  const handleToggle = () => setLoading(!loading)

  return (
    <>
      <Button level="primary" style={{marginBottom: '8px'}} onClick={handleToggle}>切换loading</Button>
      <Table
        columns={columns}
        dataSource={[]}
        empty={empty}
        bordered
        compact
        loading={loading}
      />
    </>
  );
};

export default TableExampleEmpty;
