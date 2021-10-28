import classes from '../classes'
describe('classes', () => {
  it('接受一个 classname', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it("接收两个 classname", () => {
    const res = classes("a", "b");
    expect(res).toEqual("a b");
  });
  it("接收参数一个 undefined", () => {
    const res = classes("a", undefined);
    expect(res).toEqual("a");
  });
  it("接收多个奇怪值", () => {
    const res = classes("a", "中文", undefined, false, null);
    expect(res).toEqual("a 中文");
  });
  it("接收空", () => {
    const res = classes();
    expect(res).toEqual("");
  });
});
