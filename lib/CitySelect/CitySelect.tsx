import React, { FC, createContext, useState } from "react";
import CityDialog from "./CityDialog";
import pinyin from "tiny-pinyin";

interface CitySelectProps {
  dataSource: string[];
  children?: any;
  onChange: (city: string) => void;
}

interface Context {
  map: { [key: string]: string[] };
  onChange: (city: string) => void;
}

export const CitySelectContext = createContext<null | Context>(null);

const CitySelect: FC<CitySelectProps> = (props) => {
  const { children, dataSource = [], onChange } = props;
  const [dialogVisible, setDialogVisible] = useState(false);
  const CITYMAP: Context["map"] = {};

  // 把城市通过首字母分类
  dataSource.map((city) => {
    const py = pinyin.convertToPinyin(city);
    const index = py[0];
    CITYMAP[index] = CITYMAP[index] || [];
    CITYMAP[index].push(city);
  });

  const onOpen = () => setDialogVisible(true);

  const onClose = () => setDialogVisible(false);

  return (
    <CitySelectContext.Provider value={{ map: CITYMAP, onChange }}>
      <div onClick={onOpen}>{children}</div>
      {dialogVisible && <CityDialog data={dataSource} onClose={onClose} />}
    </CitySelectContext.Provider>
  );
};

export default CitySelect;
