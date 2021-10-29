// class 切换 是否存在
interface ClassToggles {
  [key: string]: Boolean;
}

function addPrefixAndMergeClass(prefix: string) {
  return (name: string | ClassToggles) => {
    const namesObject =
      typeof name === "string" || name === undefined ? { [name]: name } : name;
    // 全变为 对象,
    const scoped = Object.entries(namesObject)
      .filter(kv => kv[1] !== false)
      .map(item => item[0])
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    return scoped;
  };
}

export default addPrefixAndMergeClass;
