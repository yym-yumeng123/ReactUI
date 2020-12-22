interface SourceDataItem {
  title: string;
  key: string;
  children?: SourceDataItem[] | undefined | null;
}

// 联合类型 多选必为数组 单选为字符串
type TreeProps = {
  sourceData: SourceDataItem[];
} & (
  | {
      selected: string;
      multiple?: false;
      onChange: (values: string) => void;
    }
  | {
      selected: string[];
      multiple: true;
      onChange: (values: string[]) => void;
    }
);
