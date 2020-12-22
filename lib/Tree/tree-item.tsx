import React, { ChangeEventHandler, useRef, useState } from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import useUpdateCollapse from "lib/hooks/useUpdateCollapse";
const sc = addPrefixAndscopedClassMarker("yui-tree");

interface TreeItemProps {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
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

  const onSelectChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (multiple) {
      if (e.target.checked) {
        onChange([...selected, item.title]);
      } else {
        onChange(selected.filter(value => value !== item.title));
      }
    } else {
      if (e.target.checked) {
        onChange(item.title);
      } else {
        onChange("");
      }
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
      divRef.current.style.height = 'auto'
      const { height } = divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + "px";

      const afterExpand = () => {
        if (!divRef.current) return;
        divRef.current.style.height = ''
        divRef.current.classList.add('yui-tree-children-present')
        divRef.current.removeEventListener('transitionend', afterExpand)
      }

      divRef.current.addEventListener('transitionend', afterExpand)
    } else {
      const { height } = divRef.current.getBoundingClientRect();
      console.log(height);
      divRef.current.style.height = height + "px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";

      const afterCollapse = () => {
        if (!divRef.current) return;
        divRef.current.style.height = ''
        divRef.current.classList.add('yui-tree-children-gone')
        divRef.current.removeEventListener('transitionend', afterCollapse)
      }

      divRef.current.addEventListener('transitionend', afterCollapse)
    }
  });

  return (
    <div key={item.key} className={sc(classes)}>
      <div className={sc("title")}>
        {expanded ? (
          <Icon size="12" name="show_more" onClick={collapse} />
        ) : (
          <Icon size="12" name="page_turning_right" onClick={expand} />
        )}
        <input
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
          <TreeItem item={subItem} level={level + 1} treeProps={treeProps} />
        ))}
      </div>
    </div>
  );
};

export default TreeItem;
