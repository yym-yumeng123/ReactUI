/**
 * @description 创建一个私有的 class 前缀, 并且可以使用 前缀-name 的 class
 * @param prefix 默认前缀
 * @param name 每一个不同的连接
 */
function scopedClassMaker(prefix: string) {
  // 返回一个 函数, 可以传 name
  return (name?: string) => {
    // 返回一个 prefix-name 的 class 类名
    return [prefix, name].filter(Boolean).join("-");
  };
}
/**
 *
 * const sc = scopedClassMaker('yui-default')
 * sc() yui-default
 * sc('') yui-default
 * sc('hi') yui-default-hi
 */

export default scopedClassMaker;
