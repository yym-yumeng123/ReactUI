import React, { FC } from 'react';
import { addPrefixAndscopedClassMarker } from "../utils/classes";

const prefix = addPrefixAndscopedClassMarker("yui-table");

interface TableProps {
  columns: any[];
  dataSource: any[]
}

const Table: FC<TableProps> = (props) => {
  const { columns, dataSource } = props
  return <div className={prefix('')}>Table</div>
}

export default Table
