import React, { ReactElement, FC, HTMLAttributes } from "react";
import Sidebar from "./sidebar";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

import "./layout.scss";

const mergeClass = addPrefixAndMergeClass("yui-layout");

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  // children 是一个 react 元素 或者多个元素
  children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = (props) => {
  const { className, children, ...restProps } = props;

  const child = children as ReactElement[];

  // 得到子元素是否有 SideBar, 有添加类名
  const hasAside =
    "length" in child &&
    child.reduce((result, node) => result || node.type === Sidebar, false);

  return hasAside ? (
    <div
      className={mergeClass({ "": true, hasAside: true }, { extra: className })}
      {...restProps}
    >
      {props.children}
    </div>
  ) : (
    <div className={mergeClass("", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

// 都从这里默认导出
export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Footer } from "./footer";
export { default as SideBar } from "./sidebar";
