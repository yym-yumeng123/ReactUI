import React from "react";
import Scroll from "lib/Scroll/scroll";

const ScrollExample = () => {
  const onPull = () => {
    console.log("我知道了");
  };

  return (
    <div>
      <Scroll style={{height: "200px"}} onPull={onPull}>
        {
          Array(40).fill(20).map(item => <p>{item}</p>)
        }
      </Scroll>
    </div>
  );
};

export default ScrollExample;
