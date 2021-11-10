import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
  name: string;

  // 父元素传参
  single?: boolean;
  index?: number;
  isCollapsed?: boolean;
  actives?: string[]
  handleClick?: (index: number, isCollapsed: boolean) => {};
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const {
    title,
    name,
    children,
    index = 0,
    isCollapsed = false,
    single,
    actives = [],
    handleClick
  } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null)

  useEffect(() => {
    console.log('121212121');
    if(actives.indexOf(name)> -1 ) {
      setOpen(true)
    }
  }, [])

  const handleToggle = () => {
    setOpen(!open);
    handleClick && handleClick(index, isCollapsed);
  };

  return (
    <div className={mergeClass("")}>
      <header className={mergeClass("header")} onClick={handleToggle}>
        <div className={mergeClass("title")}>{title}</div>
        <div>
          <Icon
            className={mergeClass("icon")}
            name="arrow_right"
            size="12"
            color="#575757"
            style={{ transform: `rotate(${(single ? isCollapsed : open) ? "90deg" : "0"})` }}
          />
        </div>
      </header>
      {/* 是否 single, 如果 true, 只看 自己的 state */}
      {(single ? isCollapsed : open) && <main ref={contentRef}>{children}</main>}
    </div>
  );
};

export default CollapseItem;
