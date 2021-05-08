import React, { useState } from 'react';
import Table from "lib/Table/table";

const TableDemo = () => {
  const [columns, setcColumns] = useState<Array<any>>([]);
  const [dataSource, setDataSource] = useState<Array<any>>([]);
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default TableDemo;
