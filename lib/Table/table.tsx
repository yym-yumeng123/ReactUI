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
import Scroll from "lib/Scroll/scroll";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-table");

import "./table.scss";

type column = {
  title: string;
  key: string;
  // 排序
  order?: "asc" | "desc" | "unsc" | string;
  sorter?: (column: any) => void;
};

interface TableProps {
  columns: column[];
  dataSource: Array<any>;

  selectedRows?: any[];
  changeSeletedItems?: (val: any) => void;

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

  const tableRef = useRef<any>(null);
  const wrapRef = useRef<any>(null);

  // TODO: selectedRow 变化时...
  useEffect(() => {
    console.log(selected, "selected...");
  }, [selected]);

  useEffect(() => {
    const tableCarbon = tableRef.current.cloneNode(true);
    tableCarbon.classList.add("yui-table-carbon");
    wrapRef.current.appendChild(tableCarbon);
    updateHeaderWidth(tableCarbon);

    let onWindowResize = () => updateHeaderWidth(tableCarbon);
    window.addEventListener("resize", onWindowResize);

    // 移除
    return () => {
      window.removeEventListener("resize", onWindowResize);
      tableCarbon.remove();
    };
  }, []);

  const updateHeaderWidth = (tableCarbon: any) => {
    // 获取原 table 的 thead
    const tableHeader: any = Array.from(tableRef.current.children).filter(
      (i: any) => i.tagName.toLowerCase() === "thead"
    )[0];

    // table header 副本
    let tableHeaderCarbon: any;

    // table 副本
    Array.from(tableCarbon.children).map((node: any) => {
      if (node.tagName.toLowerCase() !== "thead") {
        node.remove();
      } else {
        tableHeaderCarbon = node;
      }
    });

    // 获取 header 副本 的 width
    Array.from(tableHeader.children[0].children).map((th: any, index) => {
      const { width } = th.getBoundingClientRect();
      // 滚动条的宽度 + th 宽度
      tableHeaderCarbon.children[0].children[index].style.width = `${width +
        8}px`;
    });
  };

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
      <Scroll style={{ height: `${height}px` }}>
        <table
          ref={tableRef}
          className={mergeClass({ "": true, bordered, compact, striped })}
        >
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
              {rows.map(row => {
                return (
                  <th key={row.key}>
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
                  <tr key={index}>
                    <td>
                      <Checkbox
                        checked={areItemSelected(item)}
                        onChange={e => handleSelectItem(e, item, index)}
                      />
                      {String(areItemSelected(item))}
                    </td>
                    {numberVisible && <td>{index + 1}</td>}
                    {rows.map(row => {
                      return <td key={row.key}>{item[row.key]}</td>;
                    })}
                  </tr>
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
      </Scroll>
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
