// import
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
// type import
import { GraphState, GraphType } from "../../common/types";
import GraphService from "../../service/GraphService";

// prefix
const prefix = "bumineun/graph";

// initialState
const initialState: GraphState = {
  graph: null,
  loading: false,
  error: null,
};

// Actions
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

// Actions create
const reducer = handleActions<GraphState, GraphType[]>(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      graph: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// Data Actions create
export const { getListData } = createActions("GET_LIST_DATA", {
  prefix,
});

function* getListDataSaga(action: Action<string>) {
  try {
    const word = action.payload;
    yield put(pending());
    const result: GraphType[] = yield call(GraphService.getListData, word);
    yield put(success(result));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* graphSaga() {
  yield takeEvery(`${prefix}/GET_LIST_DATA`, getListDataSaga);
}
