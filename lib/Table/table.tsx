import React, { ChangeEvent, FC, useEffect } from "react";
import Pager, { PagerProps } from "lib/Pager/pager";
import { Checkbox } from "lib/Checkbox";

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

  selectedRows?: any[];
  changeSeletedItems?: (val: any) => void;

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

    selectedRows = [],
    changeSeletedItems,

    bordered = false,
    compact = false,
    striped = true,

    pager
  } = props;

  // TODO: selectedRow 变化时...
  useEffect(() => {
  }, [selectedRows]);

  // 选择单个
  const handleSelectItem = (
    e: ChangeEvent<HTMLInputElement>,
    item: any,
    index: number
  ) => {
    const { checked } = e.target;

    let selectedItem = JSON.parse(JSON.stringify(selectedRows));

    if (checked) {
      selectedItem.push(item);
    } else {
      selectedItem = selectedItem.filter((i: any) => i.key !== item.key);
    }

    changeSeletedItems && changeSeletedItems(selectedItem);
  };

  // 选择全部或全取消
  const handleSelectAllItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    changeSeletedItems && changeSeletedItems(checked ? dataSource : []);
  };

  return (
    <div className={mergeClass("wrap")}>
      <table className={mergeClass({ "": true, bordered, compact, striped })}>
        <thead className={mergeClass("head")}>
          <tr>
            <th>
              <Checkbox
                value=""
                checked={selectedRows.length === dataSource.length}
                onChange={e => handleSelectAllItem(e)}
              />
            </th>
            {numberVisible && <th>序号</th>}
            {columns.map(column => {
              return <th key={column.key}>{column.title}</th>;
            })}
          </tr>
        </thead>

        <tbody className={mergeClass("body")}>
          {dataSource.length > 0 &&
            dataSource.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Checkbox
                      value=""
                      checked={
                        selectedRows.filter(i => i.key === item.key).length > 0
                      }
                      onChange={e => handleSelectItem(e, item, index)}
                    />
                    {item.key}
                  </td>
                  {numberVisible && <td>{index + 1}</td>}
                  {columns.map(column => {
                    return <td key={column.key}>{item[column.key]}</td>;
                  })}
                </tr>
              );
            })}
          {dataSource.length === 0 && (
            <tr>
              <td>"暂无数据"</td>
            </tr>
          )}
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
