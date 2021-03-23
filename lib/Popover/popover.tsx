import React from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import './popover.scss'

const prefix = addPrefixAndscopedClassMarker("yui-popover");

const Popover = () => {
  return <div className={prefix("")}>popover</div>;
};

export default Popover;
