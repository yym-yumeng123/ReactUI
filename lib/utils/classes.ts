interface Options {
  extra: string;
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
  return (name?: string, options?: Options) => {
    const result = [prefix, name].filter(Boolean).join("-");
    if (options?.extra) {
      return [result, options?.extra].filter(Boolean).join(" ");
    } else {
      return result;
    }
  };
};

export { scopedClassMaker, classes, mergeClassOrScoped };
