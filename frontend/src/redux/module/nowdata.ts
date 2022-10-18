// import
import NowDataService from "../../service/NowDataService";
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
// type import
import { DatasState, Datatype } from "../../common/types";

// prefix
const prefix = "bumineun/now";

// initialState
const initialState: DatasState = {
  data: null,
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
const reducer = handleActions<DatasState, Datatype[]>(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      data: action.payload,
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
export const { getNowDatas } = createActions("GET_NOW_DATAS", { prefix });

// getNowDatasaga
function* getNowDataSaga() {
  try {
    yield put(pending());
    const datas: Datatype[] = yield call(NowDataService.getNowDatas);
    yield put(success(datas));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* nowdataSaga() {
  yield takeEvery(`${prefix}/GET_NOW_DATAS`, getNowDataSaga);
}
