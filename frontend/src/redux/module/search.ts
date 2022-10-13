// import
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
// type import
import { SearchState, SearchType } from "../../common/types";
import SearchService from "../../service/SearchService";

// prefix
const prefix = "bumineun/search";

// initialState
const initialState: SearchState = {
  search: null,
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
const reducer = handleActions<SearchState, SearchType>(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      search: action.payload,
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

// Search Actions create
export const { searchData } = createActions("SEARCH_DATA", { prefix });

// SearchDataSaga create
function* searchDataSaga(action: Action<string>) {
  try {
    const word = action.payload;
    yield put(pending());
    const searchResult: SearchType = yield call(SearchService.searchData, word);
    yield put(success(searchResult));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* searchSaga() {
  yield takeEvery(`${prefix}/SEARCH_DATA`, searchDataSaga);
}
