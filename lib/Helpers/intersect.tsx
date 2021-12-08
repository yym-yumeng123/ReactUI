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

export default intersect;
