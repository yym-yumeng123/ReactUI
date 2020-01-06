import React from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";

const scopedClass = scopedClassMaker("yui-layout");

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
