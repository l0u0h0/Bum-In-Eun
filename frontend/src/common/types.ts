// import redux
import { RouterState } from "redux-first-history";
import { AnyAction, Reducer } from "redux";

/** Root Type */
export interface RootState {
  datas: DatasState;
  comments: CommentsState;
  search: SearchState;
  router: Reducer<RouterState, AnyAction>;
}

/** Data State Type */
export interface DatasState {
  data: Datatype[] | null;
  loading: boolean;
  error: Error | null;
}
export interface DataListState {
  data: DataListType[] | null;
  loading: boolean;
  error: Error | null;
}

/** example data type */
export interface Datatype {
  id: number;
  text: string;
  time: string;
  count: number;
  year: number;
  date: number;
  No: string;
  Type: string;
  Text: string;
  Mean: string;
  Time: string;
}
export interface DataListType {
  No: string;
  Type: string;
  Text: string;
  Mean: string;
  Time: string;
}

/** comment data Type */
export interface CommentsState {
  comments: CommentType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface CommentType {
  No: number;
  Text: string | undefined;
  Type: string;
}

export interface CommentAddType {
  text: string;
  comment: string | undefined;
}

export interface CountIncreaseType {
  type: string | null;
  text: string | undefined;
  count: number;
}

/** Search Type */
export interface SearchState {
  search: SearchType | null;
  loading: boolean;
  error: Error | null;
}

export interface SearchType {
  dict: {
    mean: string[] | null;
    text: string;
  } | null;
  crime: {
    text: string;
    mean: string;
    category: string;
  } | null;
  static: {
    datas: Datatype | null;
  } | null;
}

/** Components props Type */
export interface Mainprops {
  datas: Datatype[] | null;
  loading: boolean;
  error: Error | null;
  getDatas: () => void;
}

export interface ChartProps {
  datas: Datatype[] | null;
}

export interface DictionarydetailProps {
  comments: CommentType[] | null;
  getComments: (arg: string) => void;
  addComment: (arg: CommentAddType) => void;
  increaseCount: (arg: CountIncreaseType) => void;
}

export interface ModalPropsType {
  show: boolean;
  onHide: () => void;
}

/** Component State Data Type */
export interface dictionarydataState {
  idx: number;
  mean: string | undefined;
  count: number;
}

export interface SearchDataState {
  data: string | null;
  originData: string | undefined;
  result: {
    dict: {
      text: string;
      mean: string[] | null;
    } | null;
    crime: {
      text: string;
      mean: string;
      category: string;
    } | null;
    static: {
      datas: Datatype | null;
    } | null;
  };
}
