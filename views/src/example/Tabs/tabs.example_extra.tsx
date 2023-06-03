import React from "react";
import Button from "lib/Button/button";
import Tabs from "lib/Tabs/tabs";
import TabPane from "lib/Tabs/tabPane";

const TabsExtraExample = () => {
  return (
    <div>
      <Tabs active="1" extra={<Button level="danger">额外</Button>}>
        <TabPane name="1" title="导航一" icon="close">额外内容一</TabPane>
        <TabPane name="2" title="导航二" icon="user">额外内容二</TabPane>
        <TabPane name="3" title="导航三" icon="social_wechat">额外内容三</TabPane>
      </Tabs>
    </div>
  );
};

export default TabsExtraExample;
