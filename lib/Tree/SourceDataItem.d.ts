interface SourceDataItem {
  title: string;
  key: string;
  children?: SourceDataItem[] | undefined | null;
}

/**
 * 由于ts 的错误, 暂时单选时 也是数组, 知识只有一个参数
 */

// 联合类型 多选必为数组 单选为字符串
type TreeProps = {
  sourceData: SourceDataItem[];
  multiple?: boolean
  selected: string[];
  onChange: (values: string[]) => void;
}
