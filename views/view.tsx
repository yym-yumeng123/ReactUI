import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import { routeList } from "./config";

// import All from "lib/All/all";
// import { Layout, Footer, Header, SideBar, Content } from "lib/Layout/layout";
// import { Button } from "lib";
// import Scroll from "lib/Scroll/scroll";
// import "./view.scss";
// // @ts-ignore
// import logo from "./logo.png";

// const isTouchDevice = "ontouchstart" in document.documentElement;
// console.log(isTouchDevice, "isTouchDevice");

import Icon from "lib/Icon/icon";

const fn = () => {
  console.log("1", 1);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    你好 <Icon name="refresh" color="red" />
    <Icon name="refresh" spin />
    <Icon name="refresh" color="red" />
    <Icon name="refresh" size="20" />
    <Icon name="alipay" size="20" onClick={fn} />
  </div>
  // <Router>
  //   <Layout className="pageWrapper">
  //     <Header className="g-header">
  //       <img src={logo} alt="logo" />
  //       <div className="g-header-right">
  //         <Button
  //           className="link"
  //           level="link"
  //           href="https://github.com/yym-yumeng123/ReactUI"
  //         >
  //           GitHub
  //         </Button>
  //       </div>
  //     </Header>
  //     <Layout>
  //       <SideBar className="g-aside">
  //         <h2>组件</h2>
  //         <ul>
  //           {routeList.map((item, index) => {
  //             return (
  //               <li key={String(index)}>
  //                 <NavLink to={item.path}>{item.title}</NavLink>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </SideBar>
  //       <Scroll style={{ height: "calc(100vh - 121px)", width: "100%" }}>
  //         <Content className="g-main">
  //           <Route path="/" component={All} exact />
  //           {routeList.map((item, index) => {
  //             return (
  //               <Route
  //                 key={index}
  //                 path={item.path}
  //                 component={item.component}
  //                 exact
  //               ></Route>
  //             );
  //           })}
  //         </Content>
  //       </Scroll>
  //     </Layout>
  //     <Footer className="g-footer">&copy; 杨雨蒙</Footer>
  //   </Layout>
  // </Router>,
);
