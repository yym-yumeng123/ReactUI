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
    children: [
      {
        label: "英雄联盟",
        key: "lol",
      },
      {
        label: "qq飞车",
        key: "qq",
      },
      {
        label: "穿越火线",
        key: "cf",
        children: [
          {
            label: "第三层",
            key: "311",
          },
          {
            label: "第三层",
            key: "33211",
          },
        ],
      },
    ],
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
    console.log("val", val);
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
