import React, { useState } from "react";
import AutoComplete from "lib/AutoComplete/AutoComplete";

const AutoCompleteExample = () => {
  const lake = ["abcd", "name", "bkdkdfj", "djkfsjkf", " erur", " dsdfs"];
  const handleFetch = (query: string): string[] => {
    return lake.filter(item => item.includes(query));
  };

  return <AutoComplete fetchSuggestions={handleFetch} />;
};

export default AutoCompleteExample;
