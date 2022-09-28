// import
import CommentService from "../../service/CommentService";
import { createActions, handleActions, Action } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
// type import
import {
  CommentAddType,
  CommentsState,
  CommentType,
  CountIncreaseType,
} from "../../common/types";

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
const reducer = handleActions<CommentsState, CommentType>(
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
export const { getComments, addComment, increaseCount } = createActions(
  "GET_COMMENTS",
  "ADD_COMMENT",
  "INCREASE_COUNT",
  { prefix }
);

// example getCommentsaga
function* getCommentsSaga(action: Action<string>) {
  try {
    const word = action.payload;
    yield put(pending());
    const comments: CommentType = yield call(CommentService.getComments, word);
    yield put(success(comments));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// example addCommentSaga
function* addCommentSaga(action: Action<CommentAddType>) {
  try {
    yield put(pending());
    const text = action.payload;
    const comment: CommentType = yield call(CommentService.addComment, text);
    const comments: CommentType = yield select(
      (state) => state.comments.comments
    );
    let data = comments[0].comments;
    data = [
      ...data,
      {
        No: 0,
        Text: comment.comment,
      },
    ];
    comments[0].comments = data;
    yield put(success(comments));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* increaseCountSaga(action: Action<CountIncreaseType>) {
  try {
    const data = action.payload;
    let word = "";
    yield put(pending());
    yield call(CommentService.increaseCount, data);
    if (data.type !== null) {
      word = data.type;
    }
    const comments: CommentType = yield call(CommentService.getComments, word);
    yield put(success(comments));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* commentsSaga() {
  yield takeEvery(`${prefix}/GET_COMMENTS`, getCommentsSaga);
  yield takeEvery(`${prefix}/ADD_COMMENT`, addCommentSaga);
  yield takeEvery(`${prefix}/INCREASE_COUNT`, increaseCountSaga);
}
