import React from "react";
import AutoComplete, { DataSourceType } from "lib/AutoComplete/AutoComplete";

interface Props {
  value: string;
  number: number;
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
    console.log(item, "item");
  };

  // 自定义模板
  const renderOption = (item: DataSourceType<Props>) => {
    return (
      <em>
        {item.value}~{item.number}
      </em>
    );
  };

  return (
    <>
      <AutoComplete
        value="同步"
        // disabled
        fetchSuggestions={handleFetch}
        onSelect={handleSelect}
        renderOption={renderOption}
      />
    </>
  );
};

export default AutoCompleteExample;
