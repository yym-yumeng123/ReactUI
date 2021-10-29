/**
 * @description 接受多个 class, 并用空格分开
 * @param names class 数组
 */

// 可以到 class.unit.js 查看使用方式
function classes(...names: (string | undefined | boolean)[]) {
  // ... 会把参数转为数组
  return names.filter(Boolean).join(" ");
}


export default classes
