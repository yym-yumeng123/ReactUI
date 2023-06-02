import React, { FC } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-layout");

// props 继承 HTML 的属性
interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: FC<FooterProps> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={mergeClass("footer", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Footer;
