import React, {
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
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
  width?: number;
  // 排序
  order?: "asc" | "desc" | "unsc" | string;
  sorter?: (column: any) => void;
};

interface TableProps {
  columns: column[];
  dataSource: Array<any>;

  selectedRows?: any[];
  changeSeletedItems?: (val: any) => void;

  expandable?: boolean; // 可展开
  checkable?: boolean;
  numberVisible?: boolean;
  bordered?: boolean;
  compact?: boolean; // 紧凑减小 padding
  striped?: boolean; // 条纹间隔
  empty?: ReactNode;
  loading?: boolean;
  height?: number;

  pager?: PagerProps;
}

const Table: FC<TableProps> = props => {
  const {
    columns,
    dataSource,

    selectedRows = [],
    changeSeletedItems,

    expandable = false,
    checkable = false,
    numberVisible = true,
    bordered = false,
    compact = false,
    striped = true,
    empty,
    loading = false,
    height,

    pager
  } = props;

  // 选中的行 state
  const [selected, setSelected] = useState(selectedRows);
  // columns state
  const [rows, setRows] = useState(columns);

  const [expandItems, setExpandItems] = useState<string[]>([]);

  const tableRef = useRef<any>(null);
  const wrapRef = useRef<any>(null);

  // TODO: selectedRow 变化时...
  useEffect(() => {
    console.log(selected, "selected...");
  }, [selected]);

  // 固定表头计算
  useEffect(() => {
    let tableCarbon: any;
    if (height) {
      tableCarbon = tableRef.current.cloneNode(false);
      tableCarbon.classList.add("yui-table-carbon");

      const tHead = tableRef.current.children[0];
      const { height } = tHead.getBoundingClientRect();
      tableRef.current.style.marginTop = `${height}px`;
      tableCarbon.appendChild(tHead);
      wrapRef.current.appendChild(tableCarbon);
    }

    // 移除
    return () => {
      height && tableCarbon.remove();
    };
  }, []);

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

  // 展开操作
  const changeExpandItems = (item: any) => {
    if (hasInExapndItems(item)) {
      setExpandItems(expandItems.filter(i => i !== item.key));
    } else {
      setExpandItems([...expandItems, item.key]);
    }
  };

  const hasInExapndItems = (item: any) => expandItems.indexOf(item.key) > -1;

  // 排序操作
  const handleOrderBy = (column: column) => {
    if (!column.hasOwnProperty("order")) {
      return;
    }

    let copyColumn = JSON.parse(JSON.stringify(column));

    if (copyColumn.order === "asc") {
      copyColumn = Object.assign(copyColumn, { order: "desc" });
    } else if (copyColumn.order === "desc") {
      copyColumn = Object.assign(copyColumn, { order: "unsc" });
    } else if (copyColumn.order === "unsc") {
      copyColumn = Object.assign(copyColumn, { order: "asc" });
    }

    setRows(
      rows.map(item => (item.key === copyColumn.key ? copyColumn : item))
    );

    column.sorter && column.sorter(column);
  };

  return (
    <div ref={wrapRef} className={mergeClass("wrap")}>
      <div style={{ height: `${height}px`, overflow: "auto" }}>
        <table
          ref={tableRef}
          className={mergeClass({ "": true, bordered, compact, striped })}
        >
          <thead className={mergeClass("head")}>
            <tr>
              {checkable && (
                <th style={{ width: "50px" }}>
                  <Checkbox
                    checked={areAllItemsSelected}
                    onChange={e => handleSelectAllItem(e)}
                  />
                </th>
              )}
              {numberVisible && <th style={{ width: "50px" }}>序号</th>}
              {expandable && <th style={{ width: "50px" }}></th>}

              {rows.map(row => {
                return (
                  <th key={row.key} style={{ width: `${row.width}px` }}>
                    <span
                      className={mergeClass("order-wrap")}
                      onClick={() => handleOrderBy(row)}
                    >
                      {row.title}
                      {row.order && (
                        <span className={mergeClass("order")}>
                          <Icon
                            color={row.order === "asc" ? "#3498ff" : "#8e8e93"}
                            name="show_less"
                            className={mergeClass("icon")}
                          />
                          <Icon
                            color={row.order === "desc" ? "#3498ff" : "#8e8e93"}
                            name="show_more"
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
                  <>
                    <tr key={index}>
                      {checkable && (
                        <td style={{ width: "50px" }}>
                          <Checkbox
                            checked={areItemSelected(item)}
                            onChange={e => handleSelectItem(e, item, index)}
                          />
                        </td>
                      )}
                      {numberVisible && (
                        <td style={{ width: "50px" }}>{index + 1}</td>
                      )}
                      {expandable && (
                        <td style={{ width: "50px" }}>
                          <Icon
                            name={
                              hasInExapndItems(item)
                                ? "arrow_down"
                                : "arrow_right"
                            }
                            size="12"
                            onClick={() => changeExpandItems(item)}
                          />
                        </td>
                      )}

                      {rows.map(row => {
                        return (
                          <td key={row.key} style={{ width: `${row.width}px` }}>
                            {item[row.key]}
                          </td>
                        );
                      })}
                    </tr>
                    <tr key={`${index}-expand`}>
                      {hasInExapndItems(item) && (
                        <td colSpan={10}>{item.description || "/"}</td>
                      )}
                    </tr>
                  </>
                );
              })}
            {dataSource.length === 0 && (
              <tr>
                <td className={mergeClass("empty")} colSpan={rows.length + 2}>
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
      {loading && (
        <div className={mergeClass("loading")}>
          <Icon name="refresh" color="#a6a6a6" size="14" spin />
          <span>加载中...</span>
        </div>
      )}
    </div>
  );
};

export default Table;
