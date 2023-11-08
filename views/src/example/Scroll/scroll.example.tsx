import React from "react";
import Scroll from "lib/Scroll/scroll";

const ScrollExample = () => {
  const onPull = () => {
    console.log("我知道了");
  };

  return (
    <div>
      <Scroll style={{height: "200px", width: "50%", border: "5px solid #3498ff",}} onPull={onPull}>
        {
          Array.from({length: 100}, (_, k) => k).map(item => <p key={item}>我是第{item}行</p>)
        }
      </Scroll>
    </div>
  );
};

export default ScrollExample;
