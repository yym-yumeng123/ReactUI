import React from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-layout");

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FC<ContentProps> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={mergeClass("content", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Content;
