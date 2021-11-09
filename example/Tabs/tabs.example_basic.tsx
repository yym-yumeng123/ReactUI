import React, { useState } from "react";
import Tabs from "lib/Tabs/tabs";
import TabPane from "lib/Tabs/tabPane";

const TabsBasicExample = () => {
  const [active, setActive] = useState<string>('1')
  const handleSelect = (val: string) => {
    setActive(val)
  }
  return (
    <div>
      <Tabs active={active} onChange={handleSelect}>
        <TabPane name="1" title="导航一">内容一</TabPane>
        <TabPane name="2" title="导航二">内容二</TabPane>
        <TabPane name="3" title="导航三">内容三个</TabPane>
      </Tabs>
    </div>
  );
};

export default TabsBasicExample;
