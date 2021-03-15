import React from "react";
import AutoComplete, { DataSourceType } from "lib/AutoComplete/AutoComplete";

interface Props {
  value: string;
  number: number;
}

interface AsyncProps {
  value: string;
  node_id: number;
}

const AutoCompleteExample = () => {
  const newData = [
    { value: "ajkdjf", number: 23 },
    { value: "gsdgsgs", number: 213 },
    { value: "sgssgfsd", number: 253 },
    { value: "dgsgh", number: 34 },
    { value: "jttjjt", number: 256 },
    { value: "yytnssr", number: 67 },
    { value: "erwrwr", number: 234 },
    { value: "ererer", number: 2111 }
  ];
  const handleFetch = (query: string) => {
    return newData.filter(item => item.value.includes(query));
  };

  const handleSelect = (item: DataSourceType) => {
    console.log(item, "2112");
  };

  // 自定义模板
  const renderOption = (item: DataSourceType<Props>) => {
    return (
      <em>
        {item.value}~{item.number}
      </em>
    );
  };

  const handleFetchAsync = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items, "item");
        return items
          .slice(0, 10)
          .map((subItem: any) => ({ value: subItem.login, ...subItem }));
      });
  };

  const renderOptionAsync = (item: DataSourceType<AsyncProps>) => {
    return (
      <em>
        {item.value}~{item.node_id}
      </em>
    );
  };

  return (
    <>
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={handleSelect}
        renderOption={renderOption}
      />
      <AutoComplete
        fetchSuggestions={handleFetchAsync}
        // onSelect={handleSelect}
        renderOption={renderOptionAsync}
      />
    </>
  );
};

export default AutoCompleteExample;
