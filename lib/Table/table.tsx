import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
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

  selectedRows?: any[];
  changeSeletedItems?: (val: any) => void;

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

    selectedRows = [],
    changeSeletedItems,

    numberVisible = true,
    bordered = false,
    compact = false,
    striped = true,

    pager
  } = props;

  // 选中的行 state
  const [selected, setSelected] = useState(selectedRows);

  // TODO: selectedRow 变化时...
  useEffect(() => {
    console.log(selected, "selected...");
  }, [selected]);

  // 选择单个
  const handleSelectItem = (
    e: ChangeEvent<HTMLInputElement>,
    item: any,
    index: number
  ) => {
    const { checked } = e.target;
    console.log(checked, "checked...");

    if (checked) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((i: any) => i.key !== item.key));
    }

    changeSeletedItems && changeSeletedItems(selected);
  };

  // 选择全部或全取消
  const handleSelectAllItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setSelected(checked ? dataSource : []);
    changeSeletedItems && changeSeletedItems(checked ? dataSource : []);
  };

  // 是否所有 item 被选中
  const areAllItemsSelected: boolean = useMemo(
    () => dataSource.length === selected.length,
    [selected]
  );

  // 单个行是否被选中
  const areItemSelected = (item: any) =>
    useMemo(() => selected.filter(i => i.key === item.key).length > 0, [
      selected
    ]);

  return (
    <div className={mergeClass("wrap")}>
      <table className={mergeClass({ "": true, bordered, compact, striped })}>
        <thead className={mergeClass("head")}>
          <tr>
            <th>
              <Checkbox
                value=""
                checked={areAllItemsSelected}
                onChange={e => handleSelectAllItem(e)}
              >
                {String(areAllItemsSelected)}
              </Checkbox>
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
                      checked={areItemSelected(item)}
                      onChange={e => handleSelectItem(e, item, index)}
                    />
                    {String(areItemSelected(item))}
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
