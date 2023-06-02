import React, { FC } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-layout");

interface SiderProps extends React.HTMLAttributes<HTMLElement> {}

const Sidebar: FC<SiderProps> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={mergeClass("sider", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Sidebar;
