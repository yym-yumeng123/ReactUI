import React from "react";
import { scopedClassMaker, classes } from "../utils/classes";

// 类名初始值 yui-layout
const scopedClass = scopedClassMaker("yui-layout");

// props 继承 HTML 的属性
interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classes(scopedClass("footer"), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Footer;
