import React from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";

const scopedClass = scopedClassMaker("yui-layout");

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<ContentProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classes(scopedClass("content"), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Content;
