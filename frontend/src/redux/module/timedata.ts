// import
import { createActions, handleActions } from "redux-actions";
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
const reducer = handleActions<TimeState, TimeType>(
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
export const { getDatas } = createActions("GET_DATAS", { prefix });

function* getDatasSaga() {
  try {
    yield put(pending());
    const result: TimeType = yield call(TimedataService.getDatas);
    yield put(success(result));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* timedataSaga() {
  yield takeEvery(`${prefix}/GET_DATAS`, getDatasSaga);
}
