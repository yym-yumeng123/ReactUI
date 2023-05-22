const getYearMonthDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day];
};

export default {
  firstDayOfMonth(date: Date) {
    const [year, month] = getYearMonthDate(date);
    return new Date(year, month, 1);
  },
  lastDayOfMonth(date: Date) {
    const [year, month] = getYearMonthDate(date);
    return new Date(year, month + 1, 0);
  },
  getYearMonthDate,
  /**
   * @param begin 开始
   * @param end 结束
   * @return [begin, ..., end]
   */
  range(begin: number, end: number): number[] {
    const array: number[] = [];
    for (let i = begin; i <= end; i++) {
      array.push(i);
    }

    return array;
  }
};
