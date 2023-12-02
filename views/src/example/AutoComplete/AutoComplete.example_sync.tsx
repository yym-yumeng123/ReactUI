import React from "react";
import AutoComplete, { DataSourceType } from "lib/AutoComplete/AutoComplete";

interface AsyncProps {
  value: string;
  node_id: number;
}

const AutoCompleteSyncExample = () => {
  const handleFetchAsync = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) =>
        items
          .slice(0, 10)
          .map((subItem: any) => ({ value: subItem.login, ...subItem }))
      );
  };

  const renderOptionAsync = (item: DataSourceType<AsyncProps>) => {
    return (
      <em>
        {item.value}~{item.node_id}
      </em>
    );
  };

  const handleSelect = (item: DataSourceType) => {
    console.log(item, "item");
  }

  return (
    <AutoComplete
      value="异步从github获取参数"
      fetchSuggestions={handleFetchAsync}
      onSelect={handleSelect}
      renderOption={renderOptionAsync}
    />
  );
};

export default AutoCompleteSyncExample;
