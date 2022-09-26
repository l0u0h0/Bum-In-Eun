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
  comments: CommentType | null;
  loading: boolean;
  error: Error | null;
}

export interface CommentType {
  id: number;
  text: string;
  comment: [{ No: number; Text: string | undefined }];
}
