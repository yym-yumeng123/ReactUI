import React, { FC, useState } from "react";
import CityDialog from "./CityDialog";
import pinyin from 'tiny-pinyin'

console.log('pinyin',pinyin.isSupported())

interface CitySelectProps {
  dataSource: string[]
  children?: any;
}

const CitySelect: FC<CitySelectProps> = (props) => {
  const { children, dataSource = [] } = props;
  const [dialogVisible, setDialogVisible] = useState(false);
  const onOpen = () => setDialogVisible(true);
  const onClose = () => setDialogVisible(false);
  console.log('dataSource',dataSource)
  return (
    <>
      <div onClick={onOpen}>{children}</div>
      {dialogVisible && <CityDialog data={dataSource} onClose={onClose} />}
    </>
  );
};

export default CitySelect;
