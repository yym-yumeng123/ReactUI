import React from "react";
import { scopedClassMaker, classes } from "../utils/utils";

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
