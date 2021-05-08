import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";

const prefix = addPrefixAndscopedClassMarker("yui-table");

interface Columns {
  title: string;
  key: string;
}

interface TableProps {
  columns: Columns[];
  dataSource: any[];
}

const Table: FC<TableProps> = props => {
  const { columns, dataSource } = props;
  console.log(columns, dataSource);

  return (
    <div className={prefix("")}>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            {columns.map(item => {
              return <th>{item.title}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {dataSource.map((item, index) => {
            return (
              <tr key={item.key}>
                <td>{index}</td>
                {columns.map(column => {
                  return (
                    <>
                      <td>{item[column.key]}</td>
                    </>
                  );
                })}
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
