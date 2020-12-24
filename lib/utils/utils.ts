interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

/**
 * @description 数组拍平
 * @param array 递归类型 拍平数组
 */
const flatten = (array: RecursiveArray<string>): string[] => {
  if (!array) {
    return [];
  }
  return array.reduce<string[]>(
    (result, current) =>
      result.concat(Array.isArray(current) ? flatten(current) : current),
    []
  );
};


export { flatten }
