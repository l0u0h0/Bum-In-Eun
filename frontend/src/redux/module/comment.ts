// import
import CommentService from "../../service/CommentService";
import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
// type import
import { CommentsState, CommentType } from "../../common/types";

// prefix
const prefix = "bumineun/comment";

// initialState
const initialState: CommentsState = {
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
const reducer = handleActions<CommentsState, CommentType[]>(
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
export const { getComments, addComments } = createActions(
  "GET_COMMENTS",
  "ADD_COMMENTS",
  { prefix }
);

// example getDatasaga
function* getCommentsSaga() {
  try {
    yield put(pending());
    const comments: CommentType[] = yield call(CommentService.getComments);
    yield put(success(comments));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// example getDataListSaga
function* addCommentsSaga() {
  try {
    yield put(pending());
    const addcomment: CommentType = yield call(
      CommentService.addComments(action.payload)
    );
    yield put(success(addcomment));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* commentsSaga() {
  yield takeEvery(`${prefix}/GET_COMMENTS`, getCommentsSaga);
  yield takeEvery(`${prefix}/ADD_COMMENTS`, addCommentsSaga);
}
