import React, { FC } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-layout");

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: FC<HeaderProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={mergeClass("header", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Header;
