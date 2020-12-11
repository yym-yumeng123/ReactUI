/**
 * @description 命名不同的类名了解
 * @param name 每一个不同的连接
 * @param prefix 前缀
 */
function scopedClassMaker(prefix: string) {
  return (name?: string) => {
    return [prefix, name].filter(Boolean).join("-");
  };
}

/**
 * @description 接受多个 class
 * @param names class 数组
 */
function classes(...names: Array<string | undefined | boolean>) {
  return names.filter(Boolean).join(" ");
}

export { scopedClassMaker, classes };
