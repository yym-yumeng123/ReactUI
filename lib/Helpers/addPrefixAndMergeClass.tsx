interface Options {
  extra: string | undefined;
}

/**
 * @param prefix 添加前缀
 * @param name 字符串 或者 对象
 * @param options {extra: 'xxx'}
 *
 */
const addPrefixAndMergeClass = (prefix: string) => (
  name: string | Record<string, boolean>,
  options?: Options
) =>
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter(kv => kv[1] !== false)
    .map(item => item[0])
    .map(name => [prefix, name].filter(Boolean).join("-"))
    .concat((options && options.extra) || [])
    .join(" ");

export default addPrefixAndMergeClass;

/**
 * const prefix = addPrefixAndMergeClass('zh')
 * prefix('a') -> zh-a
 * prefix('b') -> zh-b
 * prefix({"icon": true, "button": true}) -> zh-icon zh-button
 * prefix({"icon": true, "button": true}, {extra: 'yyy'}) -> 'zh-icon zh-button yyy'
 */
