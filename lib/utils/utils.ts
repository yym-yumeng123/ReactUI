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

/**
 * @param 交集
 */
function intersect<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  array1.map(item => {
    if (array2.indexOf(item) >= 0) {
      result.push(item);
    }
  });
  return result;
}


