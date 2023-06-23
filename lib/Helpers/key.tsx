const getKey = (index: number) =>
  index + Math.random().toString(36).substring(2, 15) + Date.now();

export { getKey };
