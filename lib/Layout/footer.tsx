import React from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";

const scopedClass = scopedClassMaker("yui-layout");

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classes(scopedClass("footer"), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Footer;
