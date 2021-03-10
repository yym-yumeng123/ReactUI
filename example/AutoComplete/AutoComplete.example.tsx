import React, { useState } from "react";
import AutoComplete from 'lib/AutoComplete/AutoComplete'

const AutoCompleteExample = () => {
  const [value, setValue] = useState<string[]>(['1', '2']);

  const handleChange = () => {
    return ['1']
  }

  return <AutoComplete dataSource={value} onChange={handleChange} />
}

export default AutoCompleteExample
