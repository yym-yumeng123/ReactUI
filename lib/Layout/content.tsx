import React from "react";
import { scopedClassMaker } from "../utils/classes";

const scopedClass = scopedClassMaker("yui-layout");

const Content: React.FunctionComponent = (props) => {
  return (
    <div className={scopedClass("content")}>
      {props.children}
    </div>
  );
};

export default Content;
