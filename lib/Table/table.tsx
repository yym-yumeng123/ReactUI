import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./table.scss";

const prefix = addPrefixAndscopedClassMarker("yui-table");

interface Columns {
  title: string;
  key: string;
}

interface TableProps {
  columns: Columns[];
  dataSource: any[];
  numberVisible?: boolean;
}

const Table: FC<TableProps> = props => {
  const { columns, dataSource, numberVisible = true } = props;
  console.log(columns, dataSource);

  return (
    <div className={prefix("wrap")}>
      <table className={prefix("")}>
        <thead className={prefix("head")}>
          <tr>
            {numberVisible && <th>序号</th>}
            {columns.map(item => {
              return <th>{item.title}</th>;
            })}
          </tr>
        </thead>

        <tbody className={prefix("body")}>
          {dataSource.map((item, index) => {
            return (
              <tr key={index}>
                {numberVisible && <td>{index + 1}</td>}
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
