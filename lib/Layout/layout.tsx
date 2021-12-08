import React, { ReactElement } from "react";
import Sidebar from "./sidebar";
import "./layout.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-layout");

// 1. 可能还有 id 等等 html属性
// interface LayoutProps {
//   style: CSSProperties;
//   className: string;
// }

// 对1的优化: 继承 html 属性
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  // children 是一个 react 元素 或者多个元素
  children: ReactElement | ReactElement[];
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { className, children, ...restProps } = props;

  // ts 断言, children 当做数组来用
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
