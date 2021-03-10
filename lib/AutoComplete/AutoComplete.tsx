import * as React from "react";

interface AutoCompleteProps {
  dataSource: string[];
  onChange: (keyWord: string) => string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = () => {
  return <div>AutoComplete</div>;
};

export default AutoComplete;
