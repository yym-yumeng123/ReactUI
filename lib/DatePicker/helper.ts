type WeekProps =
  | "Monday"
  | "Thesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const WeekDay: Record<WeekProps, number> = {
  Monday: 1,
  Thesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};

const getYearMonthDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day];
};

export default {
  // 获得一个月的第一天
  firstDayOfMonth(date: Date) {
    const [year, month] = getYearMonthDate(date);
    return new Date(year, month, 1);
  },
  // 获得一个月的最后一天
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
  },
  addMonth(date: Date, n: number) {
    const [_, month] = getYearMonthDate(date);
    const newMonth = month + n
    const copy = new Date(date)
    copy.setMonth(newMonth)
    return copy
  },
  addYear(date: Date, n: number) {
    const [year] = getYearMonthDate(date);
    const newYear = year + n
    const copy = new Date(date)
    copy.setFullYear(newYear)
    return copy
  }
};

export { WeekDay };
