import React, {
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import Pager, { PagerProps } from "lib/Pager/pager";
import { Checkbox } from "lib/Checkbox";
import Icon from "lib/Icon/icon";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-table");

import "./table.scss";

type column = {
  title: string;
  key: string;
  // width?: number | string;
  order?: "asc" | "desc" | "unsc";
};

interface TableProps {
  columns: column[];
  dataSource: Array<any>;
  onChange?: (column: column) => void;

  selectedRows?: any[];
  changeSeletedItems?: (val: any) => void;

  numberVisible?: boolean;
  bordered?: boolean;
  compact?: boolean; // 紧凑减小 padding
  striped?: boolean; // 条纹间隔
  empty?: ReactNode;

  pager?: PagerProps;
}

const Table: FC<TableProps> = props => {
  const {
    columns,
    dataSource,
    onChange,

    selectedRows = [],
    changeSeletedItems,

    numberVisible = true,
    bordered = false,
    compact = false,
    striped = true,
    empty,

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

  const handleOrderBy = (column: column) => {
    if (!column.hasOwnProperty("order")) {
      return;
    }

    onChange && onChange(column);
  };

  return (
    <div className={mergeClass("wrap")}>
      <table className={mergeClass({ "": true, bordered, compact, striped })}>
        <thead className={mergeClass("head")}>
          <tr>
            <th>
              <Checkbox
                checked={areAllItemsSelected}
                onChange={e => handleSelectAllItem(e)}
              >
                {String(areAllItemsSelected)}
              </Checkbox>
            </th>
            {numberVisible && <th>序号</th>}
            {columns.map(column => {
              return (
                <th key={column.key}>
                  <span
                    className={mergeClass("order-wrap")}
                    onClick={() => handleOrderBy(column)}
                  >
                    {column.title}
                    {column.order && (
                      <span className={mergeClass("order")}>
                        <Icon
                          color={column.order === "asc" ? "#3498ff" : "#8e8e93"}
                          name="arrow_up"
                          className={mergeClass("icon")}
                        />
                        <Icon
                          color={
                            column.order === "desc" ? "#3498ff" : "#8e8e93"
                          }
                          name="arrow_down"
                          className={mergeClass("icon")}
                        />
                      </span>
                    )}
                  </span>
                </th>
              );
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
              <td className={mergeClass("empty")} colSpan={columns.length + 2}>
                {empty ? (
                  <span>{empty}</span>
                ) : (
                  <span className="default">暂无数据</span>
                )}
              </td>
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
