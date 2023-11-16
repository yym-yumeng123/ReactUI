import React, {
  ChangeEvent,
  Fragment,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Pager, { PagerProps } from "lib/Pager/pager";
import { Checkbox } from "lib/Checkbox";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./table.scss";

const mergeClass = addPrefixAndMergeClass("yui-table");

type orderType = "asc" | "desc" | "unsc";

type DataProps = {
  key?: string;
  description?: string; // 如果有展开操作, 默认值时 description
};

type column<T> = {
  title: string;
  key: keyof T;
  width?: number;
  render?: (text: string, record: T, index: number) => ReactElement;
  // 排序
  sorter?: (val: orderType) => void;
};

interface TableProps<T> {
  columns: column<T>[]; // 表头信息
  dataSource: (T & DataProps)[]; // 数据源

  checkable?: boolean;
  changeSeletedItems?: (val: T[]) => void;
  selectedItems?: T[]; // 当可多选时, 应该选中那些

  expandable?: boolean; // 可展开

  numberVisible?: boolean; // 展示序号
  bordered?: boolean;
  compact?: boolean; // 紧凑减小 padding
  striped?: boolean; // 条纹间隔
  empty?: ReactNode;
  loading?: boolean;
  height?: number;

  pager?: PagerProps;
}

function Table<T>(props: TableProps<T>) {
  const {
    columns,
    dataSource,

    checkable = false,
    changeSeletedItems,
    selectedItems = [],

    expandable = false,
    numberVisible = true,
    bordered = false,
    compact = false,
    striped = true,
    empty,
    loading = false,
    height,

    pager,
  } = props;

  const [_, setUpdate] = useState(0); // 更新页面

  // 选中的行 state
  const [selected, setSelected] = useState<any[]>(selectedItems);
  // columns state
  const order = useRef<"asc" | "desc" | "unsc">("unsc");

  const [expandItems, setExpandItems] = useState<string[]>([]);

  const tableRef = useRef<any>(null);
  const wrapRef = useRef<any>(null);

  useEffect(() => {
    changeSeletedItems && changeSeletedItems(selected);
  }, [selected]);

  // 选择单个
  const handleSelectItem = (e: ChangeEvent<HTMLInputElement>, item: any) => {
    const { checked } = e.target;
    if (checked) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((i: any) => i.key !== item.key));
    }
  };

  // 选择全部或全取消
  const handleSelectAllItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setSelected(checked ? dataSource : []);
  };

  // 是否所有 item 被选中
  const areAllItemsSelected: boolean = useMemo(
    () => dataSource.length === selected.length,
    [selected]
  );

  // 单个行是否被选中
  const areItemSelected = (item: any) =>
    useMemo(
      () => selected.filter((i) => i.key === item.key).length > 0,
      [selected]
    );

  // 展开操作
  const changeExpandItems = (item: any) => {
    if (hasInExapndItems(item)) {
      setExpandItems(expandItems.filter((i) => i !== item.key));
    } else {
      setExpandItems([...expandItems, item.key]);
    }
  };

  const hasInExapndItems = (item: any) => expandItems.indexOf(item.key) > -1;

  // 排序操作
  const handleOrderBy = (col: column<any>) => {
    if (order.current === "unsc") {
      order.current = "asc";
    } else if (order.current === "asc") {
      order.current = "desc";
    } else if (order.current === "desc") {
      order.current = "unsc";
    }

    setUpdate(Math.random());

    col.sorter && col.sorter(order.current);
  };

  // 计算 colspan 的 值
  const colSpan = (): number => {
    let length = 0;
    if (numberVisible) {
      length += 1;
    }
    if (expandable) {
      length += 1;
    }
    if (checkable) {
      length += 1;
    }

    return length;
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
                    onChange={(e) => handleSelectAllItem(e)}
                    indeterminate={
                      dataSource.length !== selected.length &&
                      selected.length > 0
                    }
                  />
                </th>
              )}
              {numberVisible && <th style={{ width: "50px" }}>序号</th>}
              {expandable && <th style={{ width: "50px" }}></th>}

              {columns.map((row, index) => {
                return (
                  <th key={index} style={{ width: `${row.width}px` }}>
                    <span
                      className={mergeClass("order-wrap")}
                      onClick={() => handleOrderBy(row)}
                    >
                      {row.title}
                      {row.sorter && (
                        <span className={mergeClass("order")}>
                          <Icon
                            color={
                              order.current === "asc" ? "#3498ff" : "#8e8e93"
                            }
                            name="show_less"
                            className={mergeClass("icon")}
                          />
                          <Icon
                            color={
                              order.current === "desc" ? "#3498ff" : "#8e8e93"
                            }
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
            {dataSource.map((item, index) => {
              return (
                <Fragment key={index}>
                  <tr>
                    {checkable && (
                      <td style={{ width: "50px" }}>
                        <Checkbox
                          checked={areItemSelected(item)}
                          onChange={(e) => handleSelectItem(e, item)}
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

                    {columns.map((row) => {
                      return (
                        <td
                          key={row.key as string}
                          style={{ width: `${row.width}px` }}
                        >
                          {row.render
                            ? row.render(
                                item[row.key] as unknown as string,
                                item,
                                index
                              )
                            : (item[row.key] as unknown as string)}
                        </td>
                      );
                    })}
                  </tr>
                  {hasInExapndItems(item) && (
                    <tr>
                      <td colSpan={colSpan()}></td>
                      <td colSpan={columns.length}>
                        {item.description || "/"}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
            {dataSource.length === 0 && (
              <tr>
                <td
                  className={mergeClass("empty")}
                  colSpan={columns.length + colSpan()}
                >
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
}

export default Table;
