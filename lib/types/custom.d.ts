// * 使用 import from, 让 svg 默认导出
declare module '*.svg' {
  const content: any;
  export default content;
}
