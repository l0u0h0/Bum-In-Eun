import { RouterState } from "redux-first-history";
import { AnyAction, Reducer } from "redux";

export interface RootState {
  datas: DatasState;
  router: Reducer<RouterState, AnyAction>;
}

export interface DatasState {
  data: Datatype[] | null;
  loading: boolean;
  error: Error | null;
}

/** example data type */
export interface Datatype {
  No: string;
  Text: string;
}
