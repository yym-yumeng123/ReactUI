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
 * @description 合并 上面两个函数
 */
const mergeClassOrScoped = (prefix: string) => {
  return (name?: string | ClassToggles, options?: Options) => {
    let name2;
    let result;
    // 如果 name 为 string, 直接拼接
    if (typeof name === "string" || name === undefined) {
      name2 = name;
      result = [prefix, name2].filter(Boolean).join("-");
    } else {
      name2 = Object.entries(name)
        .filter(item => item[1])
        .map(kv => kv[0]);
      result = name2
        .map(item => [prefix, item].filter(Boolean).join("-"))
        .join(" ");
    }

    if (options?.extra) {
      return [result, options?.extra].filter(Boolean).join(" ");
    } else {
      return result;
    }
  };
};

export { scopedClassMaker, classes, mergeClassOrScoped };
