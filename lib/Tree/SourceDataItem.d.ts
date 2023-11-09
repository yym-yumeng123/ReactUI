interface SourceDataItem {
  title: string;
  key: string;
  children?: SourceDataItem[] | undefined | null;
}

/**
 * 由于ts 的错误, 暂时单选时 也是数组, 知识只有一个参数
 */

// 联合类型 多选必为数组 单选为字符串
type TreeMultiple = {
  multiple: true;
  selected: string[];
  onChange: (values: string[]) => void;
};
type TreeSingle = {
  multiple: false;
  selected: string;
  onChange: (values: string) => void;
};

type TreeProps = {
  sourceData: SourceDataItem[];
  multiple?: boolean;
  selected?: string[];
  autoSelect?: boolean; // 和 multiple 配合使用, 当多选时, 有两种模式: 1. 多次选择当前 2. 选择子元素时, 父元素会被选中
  onChange: (values: string[]) => void;
};
