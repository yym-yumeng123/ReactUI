import React from "react";
import { scopedClassMaker } from "../utils/classes";

const scopedClass = scopedClassMaker("yui-layout");

const Header: React.FunctionComponent = (props) => {
  return (
    <div className={scopedClass("header")}>
      {props.children}
    </div>
  );
};

export default Header;
