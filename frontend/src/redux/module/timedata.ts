// import
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
// type import
import { TimeState, TimeType } from "../../common/types";
import TimedataService from "../../service/TimedataService";

// prefix
const prefix = "bumineun/time";

// initialState
const initialState: TimeState = {
  time: null,
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
const reducer = handleActions<TimeState, TimeType[]>(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      time: action.payload,
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
export const { getData_1, getData_2, getListData } = createActions(
  "GET_DATA_1",
  "GET_DATA_2",
  "GET_LIST_DATA",
  { prefix }
);

function* getData_1Saga() {
  try {
    yield put(pending());
    const result: TimeType[] = yield call(TimedataService.getData_1);
    yield put(success(result));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getData_2Saga() {
  try {
    yield put(pending());
    const result: TimeType[] = yield call(TimedataService.getData_2);
    yield put(success(result));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getListDataSaga(action: Action<string>) {
  try {
    const word = action.payload;
    yield put(pending());
    const result: TimeType[] = yield call(TimedataService.getListData, word);
    yield put(success(result));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* timedataSaga() {
  yield takeEvery(`${prefix}/GET_DATA_1`, getData_1Saga);
  yield takeEvery(`${prefix}/GET_DATA_2`, getData_2Saga);
  yield takeEvery(`${prefix}/GET_LIST_DATA`, getListDataSaga);
}
