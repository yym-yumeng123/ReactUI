import React, { ReactElement } from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";
import Sidebar from "./sidebar";
import "./layout.scss";

// 前缀
const scopedClass = scopedClassMaker("yui-layout");

// 1. 可能还有 id 等等 html属性
// interface LayoutProps {
//   style: CSSProperties;
//   className: string;
// }

// 对1的优化: 继承 html 属性
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { className, ...restProps } = props;
  const children = props.children as ReactElement[];

  const hasAside =
    children.length &&
    children.reduce(
      (result, node) => result || node.type === Sidebar,
      false
    );

  return hasAside ? (
    <div
      className={classes(scopedClass(), className, "yui-layout-hasAside")}
      {...restProps}
    >
      {props.children}
    </div>
  ) : (
    <div className={classes(scopedClass(), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;
export {Layout};
export {default as Header} from  "./header";
export {default as Content} from  "./content";
export {default as Footer} from  "./footer";
export {default as SideBar} from  "./sidebar";
