import React, { ChangeEventHandler, useRef } from "react";
import Icon from "lib/Icon/icon";
import useUpdateCollapse from "lib/hooks/useUpdateCollapse";
import useToggle from "lib/hooks/useToggle";
import flatten from "lib/Helpers/flatten";
import intersect from "lib/Helpers/intersect";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-tree");

interface TreeItemProps {
  item: SourceDataItem;
  level: number; // 第几级
  treeProps: TreeProps; // 树性组件需要的参数
  onItemChange: (value: string[]) => void;
}

/**
 * @description 收集所有子元素 得到一个 多为数组, 需要 拍平
 * @param item 每一项元素
 */
const collectChildrenValues = (item: SourceDataItem): any => {
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
    item,
    level = 0,
    treeProps,
    treeProps: { multiple, selected, onChange }
  } = props;

  // 打开关闭的子元素
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // collapse 折叠 expand 展开 expanded 是否展开
  const { expanded, expand, collapse } = useToggle(true);

  // 自定义钩子: 展开/折叠动画
  useUpdateCollapse(expanded, () => {
    if (!divRef.current) return;

    // 打开 关闭, 改变 高度
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
      // 先获取元素的高度
      const { height } = divRef.current.getBoundingClientRect();
      // 设置 元素的 高度
      divRef.current.style.height = height + "px";
      // 让浏览器计算一下高度 分割 height -> 0 的步骤
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";

      // 动画结束 height = ''  清除 事件
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
    const { checked } = e.target
    // 当我选择时, 收集所有 children 的  value
    const childrenValues = collectChildrenValues(item);

    if (multiple) {
      if (checked) {
        // 当选中时, 添加所有的子元素
        props.onItemChange([...selected, item.title, ...childrenValues]);
      } else {
        props.onItemChange(
          selected.filter(
            value =>
              value !== item.title && childrenValues.indexOf(value) === -1
          )
        );
      }
    } else {
      checked ? onChange([item.title]) : onChange([""]);
    }
  };

  // 元素内部的 change
  const onItemChange = (values: string[]) => {
    // 子代被选中全部, 返回的 父
    const childrenValues = collectChildrenValues(item);
    // 取 values 和 childrenValues 的交集
    const common = intersect(values, childrenValues);
    if (common.length !== 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.title))));
      inputRef.current!.indeterminate = common.length !== childrenValues.length;
    } else {
      props.onItemChange(values.filter((v: string) => v !== item.title));
      inputRef.current!.indeterminate = false;
    }
  };

  // 每一个层级有一个不同的 class level
  const classes = {
    [`level-${level}`]: true,
    item: true
  };

  const checked = multiple
    ? selected.indexOf(item.title) >= 0
    : selected[0] === item.title;

  return (
    <div key={item.value} className={mergeClass(classes)}>
      <div className={mergeClass("title")}>
        {expanded ? (
          <Icon size="12" name="show_more" onClick={collapse} />
        ) : (
          <Icon size="12" name="page_turning_right" onClick={expand} />
        )}
        <input
          ref={inputRef}
          type="checkbox"
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
            key={subItem.value}
            item={subItem}
            level={level + 1}
            onItemChange={onItemChange}
            treeProps={treeProps}
          />
        ))}
      </div>
    </div>
  );
};

export default TreeItem;
