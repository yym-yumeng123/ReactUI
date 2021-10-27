/**
 * @description 接受多个 class
 * @param names class 数组
 */
function classes(...names: (string | undefined | boolean)[]) {
  // ... 会把参数转为数组
  return names.filter(Boolean).join(" ");
}
export default classes
