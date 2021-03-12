import React from "react";
import AutoComplete from "lib/AutoComplete/AutoComplete";

const AutoCompleteExample = () => {
  const lake = ["abcd", "name", "bkdkdfj", "djkfsjkf", " erur", " dsdfs"];
  const handleFetch = (query: string): string[] => {
    return lake.filter(item => item.includes(query));
  };

  const handleSelect = (item: string) => {
    console.log(item, '2112');

  }

  return <AutoComplete fetchSuggestions={handleFetch} onSelect={handleSelect} />;
};

export default AutoCompleteExample;
