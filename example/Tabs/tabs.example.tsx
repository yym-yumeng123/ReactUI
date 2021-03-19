import React from "react";
import Tabs from "lib/Tabs/tabs";
import TabPane from "lib/Tabs/tabPane";

const TabsExample = () => {
  return (
    <div>
      <Tabs>
        <TabPane title="导航一">内容一</TabPane>
        <TabPane title="导航二">内容二</TabPane>
        <TabPane title="导航三">内容三个</TabPane>
      </Tabs>
    </div>
  );
};

export default TabsExample;
