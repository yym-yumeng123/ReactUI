import React from "react";
import { scopedClassMaker } from "../utils/classes";

const scopedClass = scopedClassMaker("yui-layout");

const Sidebar: React.FunctionComponent = (props) => {
  return (
    <div className={scopedClass("sider")}>
      {props.children}
    </div>
  );
};

export default Sidebar;
