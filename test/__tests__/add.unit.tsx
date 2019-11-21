function add(a:number, b:number) {
  return a + b
}
test('add', () => {
  expect(add(1,1)).toEqual(2)
});
