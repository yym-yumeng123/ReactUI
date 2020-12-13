import { classes, mergeClassOrScoped } from "../classes";

// 描述一个东西 describe
describe("classes", () => {
  // it 它怎么怎么样
  it("接收一个 classname", () => {
    const res = classes("a");
    expect(res).toEqual("a");
  });
  it("接收两个 classname", () => {
    const res = classes("a", "b");
    expect(res).toEqual("a b");
  });
  it("接收参数一个 undefined", () => {
    const res = classes("a", undefined);
    expect(res).toEqual("a");
  });
  it("接收多个值", () => {
    const res = classes("a", "中文", undefined, false, null);
    expect(res).toEqual("a 中文");
  });
  it("接收空", () => {
    const res = classes();
    expect(res).toEqual("");
  });
});

describe("mergeClassOrScoped", () => {
  it("接收字符串或对象", () => {
    const scopedClass = mergeClassOrScoped("yui-layout");
    expect(scopedClass('')).toEqual("yui-layout");
    expect(scopedClass("x")).toEqual("yui-layout-x");
    expect(scopedClass({ y: true, z: false })).toEqual("yui-layout-y");
    expect(scopedClass({ y: true, z: true })).toEqual("yui-layout-y yui-layout-z");
    expect(scopedClass({ y: true, z: true }, { extra: "red" })).toEqual(
      "yui-layout-y yui-layout-z red"
    );
  });
});
