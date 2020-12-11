import React from "react";
import { scopedClassMaker, classes } from "../utils/utils";

const scopedClass = scopedClassMaker("yui-layout");

interface SiderProps extends React.HTMLAttributes<HTMLElement> {}

const Sidebar: React.FunctionComponent<SiderProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classes(scopedClass("sider"), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Sidebar;
