/**
 * @description 数字去重
 * @param arr数组
 * @returns []
 */

const unique = (arr: number[]): number[] => {
  const object: Record<number, boolean> = {};
  arr.map((item: number) => {
    object[item] = true;
  });
  return Object.keys(object).map((s) => parseInt(s, 10));
};

export default unique;
