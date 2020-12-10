import React from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";

// 初始化class
const scopedClass = scopedClassMaker("yui-layout");
// 使用 - 连接 class
// scopedClass('header')

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classes(scopedClass("header"), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Header;
