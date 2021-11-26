import React, { FC } from "react";
import Pager, { PagerProps } from "lib/Pager/pager";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-table");

import "./table.scss";

type columns = {
  title: string;
  key: string;
  width?: number | string;
};

interface TableProps {
  columns: columns[];
  dataSource: Array<any>;
  numberVisible?: boolean;
  bordered?: boolean;
  compact?: boolean; // 紧凑减小 padding
  striped?: boolean; // 条纹间隔

  pager?: PagerProps;
}

const Table: FC<TableProps> = props => {
  const {
    columns,
    dataSource,
    numberVisible = true,
    bordered = false,
    compact = false,
    striped = true,

    pager
  } = props;

  return (
    <div className={mergeClass("wrap")}>
      <table className={mergeClass({ "": true, bordered, compact, striped })}>
        <thead className={mergeClass("head")}>
          <tr>
            {numberVisible && <th>序号</th>}
            {columns.map(item => {
              return <th key={item.key}>{item.title}</th>;
            })}
          </tr>
        </thead>

        <tbody className={mergeClass("body")}>
          {dataSource.map((item, index) => {
            return (
              <tr key={index}>
                {numberVisible && <td>{index + 1}</td>}
                {columns.map(column => {
                  return <td key={column.key}>{item[column.key]}</td>;
                })}
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
      {pager && (
        <div className={mergeClass("pager")}>
          <Pager {...pager} />
        </div>
      )}
    </div>
  );
};

export default Table;
