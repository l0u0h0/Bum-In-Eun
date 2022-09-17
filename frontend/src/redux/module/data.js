import DataService from "../../service/DataService";
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";

const prefix = "bumineun/test";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

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
      data: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

export const { getData } = createActions("GET_DATA", { prefix });

function* getDataSaga() {
  try {
    console.log("start");
    yield put(pending());
    const datas = yield call(DataService.getDatas);
    console.log(datas);
    yield put(success(datas));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* datasSaga() {
  yield takeEvery(`${prefix}/GET_DATA`, getDataSaga);
}
