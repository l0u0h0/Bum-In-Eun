import DataService from "../../service/DataService";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

const prefix = "/test";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      datas: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  { prefix }
);

export default reducer;

export const { getDatas } = createActions("GET_DATAS", { prefix });

function* getDatasSaga() {
  try {
    yield put(pending());
    const datas = yield call(DataService.getData);
    yield put(success(datas));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* datasSaga() {
  yield takeEvery(`${prefix}/GET_DATA`, getDatasSaga);
}
