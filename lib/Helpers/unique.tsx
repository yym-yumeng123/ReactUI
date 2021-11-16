/**
 * ! 数字去重
 * @param number[]
 * @returns []
 */

const unique = (arr: number[]) => {
  const object: any = {};
  arr.map((item: number) => {
    object[item] = true;
  });
  return Object.keys(object).map(s => parseInt(s, 10));
};

export default unique
