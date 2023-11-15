import React, { useState } from "react";
import NavBar, { ItemProps } from "lib/Nav/nav";

const items: ItemProps[] = [
  {
    label: "新闻",
    key: "news",
  },
  {
    label: "游戏",
    key: "game",
  },
  {
    label: "电脑",
    key: "computer",
  },
  {
    label: (
      <a href="http://www.baidu.com" target="_blank">
        百度
      </a>
    ),
    key: "baidu",
  },
];

const NavExample = () => {
  const [current, setCurrent] = useState("news");
  const handleChange = (val: string) => {
    setCurrent(val);
  };
  return (
    <>
      <NavBar items={items} activeKeys={[current]} onClick={handleChange} />

      <br />

      <NavBar
        items={items}
        activeKeys={[current]}
        onClick={handleChange}
        type="primary"
      />
    </>
  );
};

export default NavExample;
