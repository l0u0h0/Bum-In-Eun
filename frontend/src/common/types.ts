// import redux
import { RouterState } from "redux-first-history";
import { AnyAction, Reducer } from "redux";

/** Root Type */
export interface RootState {
  datas: DatasState;
  comments: CommentsState;
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
  // No: string;
  // Text: string;
  id: number;
  text: string;
  time: string;
  No: string;
  Type: string;
  Text: string;
  Time: string;
}
export interface DataListType {
  No: string;
  Type: string;
  Text: string;
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

export interface Mainprops {
  datas: Datatype[] | null;
  loading: boolean;
  error: Error | null;
  getDatas: () => void;
}

export interface SearchState {
  data: string | null;
  originData: string | undefined;
  test: {
    crime: {
      word: string;
      category: string;
    };
    word: [any, any];
    static: string;
  };
}

export interface dictionarydataState {
  idx: number;
  mean: string | undefined;
  count: number;
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
