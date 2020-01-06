import React from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";

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
