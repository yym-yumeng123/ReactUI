import React from "react";
import { scopedClassMaker } from "../utils/classes";

const scopedClass = scopedClassMaker("yui-layout");

const Footer: React.FunctionComponent = (props) => {
  return (
    <div className={scopedClass("footer")}>
      {props.children}
    </div>
  );
};

export default Footer;
