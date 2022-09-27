// import
import CommentService from "../../service/CommentService";
import { createActions, handleActions, Action } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
// type import
import { CommentAddType, CommentsState, CommentType } from "../../common/types";

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
export const { getComments, addComment } = createActions(
  "GET_COMMENTS",
  "ADD_COMMENT",
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
    console.log("add_saga_start");
    yield put(pending());
    console.log(action.payload);
    const text = action.payload;
    const comment: CommentType = yield call(CommentService.addComment, text);
    const comments: CommentType = yield select(
      (state) => state.comments.comments
    );
    const data = comments[0].comments;
    console.log([
      ...data,
      {
        No: 0,
        Text: comment.comment,
      },
    ]);
    // console.log(
    //   comments[0].comments.push({
    //     No: 0,
    //     Text: comment.comment,
    //   })
    // );
    // yield put(success(comment));
    yield put(
      success([
        ...data,
        {
          No: 0,
          Text: comment.comment,
        },
      ])
    );
    console.log("success_after");
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// saga create
export function* commentsSaga() {
  yield takeEvery(`${prefix}/GET_COMMENTS`, getCommentsSaga);
  yield takeEvery(`${prefix}/ADD_COMMENT`, addCommentSaga);
}
