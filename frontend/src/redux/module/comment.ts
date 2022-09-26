// import
import CommentService from "../../service/CommentService";
import { createActions, handleActions, Action } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
// type import
import { CommentsState, CommentType } from "../../common/types";

// prefix
const prefix = "bumineun/comment";

// initialState
const initialState: CommentsState = {
  comments: null,
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
      comments: action.payload,
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

// Comments Actions create
export const { getComments, addComments } = createActions(
  "GET_COMMENTS",
  "ADD_COMMENT",
  { prefix }
);

// example getCommentsaga
function* getCommentsSaga(action: Action<string>) {
  try {
    const word = action.payload;
    yield put(pending());
    const comments: CommentType[] = yield call(
      CommentService.getComments,
      word
    );
    yield put(success(comments));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// example addCommentSaga
function* addCommentsSaga(action: Action<CommentType>) {
  try {
    yield put(pending());
    const comment: CommentType = yield call(
      CommentService.addComments,
      action.payload
    );
    const comments: CommentType[] = yield select(
      (state) => state.comments.comments
    );
    yield put(success([...comments, comment]));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* commentsSaga() {
  yield takeEvery(`${prefix}/GET_COMMENTS`, getCommentsSaga);
  yield takeEvery(`${prefix}/ADD_COMMENT`, addCommentsSaga);
}
