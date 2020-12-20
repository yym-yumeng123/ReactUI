interface Options {
  extra: string;
}

// 定义 class 开关
interface ClassToggles {
  // 类似 hasAside : true
  [K: string]: boolean;
}

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

/**
 * @description 接受多个 classnames
 * @param name 可以是字符串, 也可以是对象 '' || {}
 * @param options 接受一个 extra 额外的 class
 */
const addPrefixAndscopedClassMarker = (prefix: string) => (
  name: string | ClassToggles,
  options?: Options
) =>
  // 对象转为数组 => 过滤 => 循环 => 每个类名加空格
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter(item => item[1] !== false)
    .map(kv => kv[0])
    .map(item => [prefix, item].filter(Boolean).join("-"))
    .concat(options?.extra || [])
    .join(" ");

export { scopedClassMaker, classes, addPrefixAndscopedClassMarker };
