// class 切换 是否存在
interface ClassToggles {
  [key: string]: Boolean;
}

interface Options {
  extra: string | undefined;
}

/**
 * @param options {extra: 'xxx'}
 */
const addPrefixAndMergeClass = (prefix: string) => (
  name: string | ClassToggles,
  options?: Options
) =>
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter(kv => kv[1] !== false)
    .map(item => item[0])
    .map(name => [prefix, name].filter(Boolean).join("-"))
    .concat((options && options.extra) || [])
    .join(" ");

export default addPrefixAndMergeClass;
