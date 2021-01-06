/**
 * @description 计算滚动条宽度
 */

function scrollbarWidth() {
  const div = document.createElement("div");

  div.style.position = "absolute";
  // 把 div 放到屏幕之外
  div.style.left = div.style.top = "-9999px";
  div.style.height = div.style.width = "100px";
  div.style.overflow = "scroll";

  document.body.appendChild(div);

  const width = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return width;
}

export default scrollbarWidth
