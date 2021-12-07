import React, { ChangeEventHandler, useRef } from "react";
import Icon from "lib/Icon/icon";
import { flatten, intersect } from "../utils/utils";
import useUpdateCollapse from "lib/hooks/useUpdateCollapse";
import useToggle from "lib/hooks/useToggle";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-tree");

interface TreeItemProps {
  key: string;
  item: SourceDataItem;
  level: number; // 第几级
  treeProps: TreeProps;
  onItemChange: (value: string[]) => void;
}

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

/**
 * 递归渲染树的每一项
 * @param item 数组的每一项
 * @param level 处于第几层, 默认为0层
 */
const TreeItem: React.FC<TreeItemProps> = props => {
  const {
    key,
    item,
    level = 0,
    onItemChange,
    treeProps,
    treeProps: { multiple, selected, onChange }
  } = props;
  // 展开

  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const checked = multiple
    ? selected.indexOf(item.title) >= 0
    : selected === item.title;

  const { expanded, expand, collapse } = useToggle(true);
  console.log(expand, "expand....");

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

  // 子元素变化
  const onItemChange1 = (values: any) => {
    // 子代被全部选中
    const childrenValues = collectChildrenValues(item);
    console.log(childrenValues, "dslk");

    const common = intersect(values, childrenValues);
    console.log(common, "带领僧松开");
    if (common.length !== 0) {
      onItemChange(Array.from(new Set(values.concat(item.title))));
      inputRef.current!.indeterminate = common.length !== childrenValues.length;
    } else {
      onItemChange(values.filter((v: string) => v !== item.title));
      inputRef.current!.indeterminate = false;
    }
  };

  // 每一个层级有一个不同的 class level
  const classes = {
    [`level-${level}`]: true,
    item: true
  };

  return (
    <div key={key} className={mergeClass(classes)}>
      <div className={mergeClass("title")}>
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
        className={mergeClass({ children: true, collapsed: !expanded })}
      >
        {item.children?.map(subItem => (
          <TreeItem
            key={subItem.key}
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
