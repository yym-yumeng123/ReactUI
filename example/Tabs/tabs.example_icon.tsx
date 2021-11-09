import React from "react";
import Tabs from "lib/Tabs/tabs";
import TabPane from "lib/Tabs/tabPane";

const TabsIconExample = () => {
  return (
    <div>
      <Tabs active="user">
        <TabPane name="close" title="导航一" icon="close">
          我是关闭按钮
        </TabPane>
        <TabPane name="user" title="导航二" icon="user">
          我是用户按钮
        </TabPane>
        <TabPane name="wechat" title="导航三" icon="social_wechat">
          我是微信按钮
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsIconExample;
