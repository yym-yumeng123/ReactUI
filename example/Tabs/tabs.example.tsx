import React, { useState } from "react";
import Tabs from "lib/Tabs/tabs";
import TabPane from "lib/Tabs/tabPane";

const TabsExample = () => {
  const [value, setValue] = useState<string>('1')
  const handleSelect = (name: string) => {
    setValue(name)
  }
  return (
    <div>
      <Tabs active={value} onChange={handleSelect}>
        <TabPane name="1" title="导航一二三">内容一二三</TabPane>
        <TabPane name="2" title="导航二">内容二</TabPane>
        <TabPane name="3" title="导航三">内容三个</TabPane>
      </Tabs>

      <Tabs active="22">
        <TabPane name="11" title="导航一">内容一</TabPane>
        <TabPane name="22" title="导航二">内容二</TabPane>
        <TabPane name="33" title="导航三">内容三个</TabPane>
      </Tabs>
    </div>
  );
};

export default TabsExample;
