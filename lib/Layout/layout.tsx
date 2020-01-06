import React from "react";
import { scopedClassMaker } from "../utils/classes";
const scopedClass = scopedClassMaker("yui-layout");

// 1. 可能还有 id 等等 html属性
// interface LayoutProps {
//   style: CSSProperties;
//   className: string;
// }

// 对1的优化: 继承 html 属性
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div style={{}} className={scopedClass()} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;
