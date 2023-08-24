import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Checkbox } from "lib/Checkbox";

const CheckboxExampleBasic = () => {
  const [numbers] = useState(["1", "2", "3"]);
  const [selected, setSelected] = useState<string[]>([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (selected.length !== numbers.length && selected.length > 0) {
      setIndeterminate(true);
    } else {
      setIndeterminate(false);
    }

    if (selected.length === numbers.length) {
      setChecked(true);
    }
    if (selected.length === 0) {
      setChecked(false);
    }
  }, [selected]);

  const handleAllSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked ? setSelected(numbers) : setSelected([]);
  };

  const handleItemSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((i) => i !== value));
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value, "我复选框的值");
  };
  return (
    <>
      <Checkbox onChange={handleChange} value="复选框"></Checkbox>
      <Checkbox value="Checkbox" checked={true}>
        复选框
      </Checkbox>
      <Checkbox value="不可点击" disabled></Checkbox>
      <Checkbox value="选中不可点击" checked disabled></Checkbox>

      <br />

      <Checkbox
        value="全选/不全选"
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleAllSelected}
      ></Checkbox>

      {numbers.map((i) => {
        return (
          <Checkbox
            key={i}
            value={i}
            onChange={handleItemSelected}
            checked={selected.filter((e) => e === i).length > 0}
          />
        );
      })}
    </>
  );
};

export default CheckboxExampleBasic;
