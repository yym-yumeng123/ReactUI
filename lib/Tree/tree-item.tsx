import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  useRef,
  useState
} from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import { flatten } from "../utils/utils";
import useUpdateCollapse from "lib/hooks/useUpdateCollapse";
const sc = addPrefixAndscopedClassMarker("yui-tree");

interface TreeItemProps {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
  onItemChange: (value: string[]) => void;
}

/**
 * 递归渲染树的每一项
 * @param item 数组的每一项
 * @param level 处于第几层, 默认为0层
 */
const TreeItem: React.FC<TreeItemProps> = props => {
  const {
    item,
    level = 0,
    onItemChange,
    treeProps,
    treeProps: { multiple, selected, onChange }
  } = props;
  // 展开
  const [expanded, setExpanded] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const classes = {
    [`level-${level}`]: true,
    item: true
  };

  const checked = multiple
    ? selected.indexOf(item.title) >= 0
    : selected === item.title;

  /**
   * @description 收集所有子元素
   * @param item 每一项元素
   */
  const collectChildrenValues = (item: SourceDataItem): string[] => {
    return flatten(
      item.children?.map(subItem => [
        subItem.title,
        collectChildrenValues(subItem)
      ])
    );
  };

  const onSelectChange: ChangeEventHandler<HTMLInputElement> = e => {
    // chidren 的值
    const childrenValues = collectChildrenValues(item);

    if (multiple) {
      if (e.target.checked) {
        onItemChange([...selected, item.title, ...childrenValues]);
      } else {
        onItemChange(
          selected.filter(
            value =>
              value !== item.title && childrenValues.indexOf(value) === -1
          )
        );
      }
    } else {
      if (e.target.checked) {
        onChange(item.title);
      } else {
        onChange("");
      }
    }
  };

  /**
   *
   * @param 交集
   */
  function intersect<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    array1.map(item => {
      if (array2.indexOf(item) >= 0) {
        result.push(item);
      }
    });
    return result;
  }

  // 子元素变化
  const onItemChange1 = (values: any) => {
    // 子代被全部选中
    const childrenValues = collectChildrenValues(item);
    console.log(childrenValues, "dslk");

    const common = intersect(values, childrenValues);
    console.log(common, "带领僧松开");
    if (common.length !== 0) {
      onItemChange(Array.from(new Set(values.concat(item.title))));
      if (common.length === childrenValues.length) {
        inputRef.current!.indeterminate = false
      } else {
        inputRef.current!.indeterminate = true
      }
    } else {
      onItemChange(values.filter((v: string) => v !== item.title))
      inputRef.current!.indeterminate = false
    }
  };

  const collapse = () => {
    setExpanded(false);
  };

  const expand = () => {
    setExpanded(true);
  };

  useUpdateCollapse(expanded, () => {
    if (!divRef.current) return;
    if (expanded) {
      divRef.current.style.height = "auto";
      const { height } = divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + "px";

      const afterExpand = () => {
        if (!divRef.current) return;
        divRef.current.style.height = "";
        divRef.current.classList.add("yui-tree-children-present");
        divRef.current.removeEventListener("transitionend", afterExpand);
      };

      divRef.current.addEventListener("transitionend", afterExpand);
    } else {
      const { height } = divRef.current.getBoundingClientRect();
      console.log(height);
      divRef.current.style.height = height + "px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";

      const afterCollapse = () => {
        if (!divRef.current) return;
        divRef.current.style.height = "";
        divRef.current.classList.add("yui-tree-children-gone");
        divRef.current.removeEventListener("transitionend", afterCollapse);
      };

      divRef.current.addEventListener("transitionend", afterCollapse);
    }
  });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div key={item.key} className={sc(classes)}>
      <div className={sc("title")}>
        {expanded ? (
          <Icon size="12" name="show_more" onClick={collapse} />
        ) : (
          <Icon size="12" name="page_turning_right" onClick={expand} />
        )}
        <input
          ref={inputRef}
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={onSelectChange}
        />
        {item.title}
      </div>
      <div
        ref={divRef}
        className={sc({ children: true, collapsed: !expanded })}
      >
        {item.children?.map(subItem => (
          <TreeItem
            item={subItem}
            level={level + 1}
            onItemChange={onItemChange1}
            treeProps={treeProps}
          />
        ))}
      </div>
    </div>
  );
};

export default TreeItem;
