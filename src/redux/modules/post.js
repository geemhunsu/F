import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';
const DELETE_POST = 'DELETE_POST';
const CLICK_LIKE = 'CLICK_LIKE';

const getPost = createAction(GET_POST, (posts) => ({ posts }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const clickLike = createAction(CLICK_LIKE, (postId) => ({ postId }));

const initialState = {
  postList: [],
};

const getPostMiddleware = (page) => {
  console.log(page);
  return (dispatch) => {
    apis
      .getPost(page)
      .then((res) => {
        console.log(res);
        // const postArr = {
        //   posts: res,
        // };
        dispatch(getPost(res));
        // console.log('finish');
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const deletePostMiddleware = (postId) => {
  return (dispatch) => {
    apis
      .deletePost(postId)
      .then((res) => {
        console.log(res);
        dispatch(deletePost(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const clickLikeMiddleware = (postId) => {
  return (dispatch) => {
    apis
      .clickLike(postId)
      .then((res) => {
        console.log(res);
        dispatch(clickLike(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.posts);
        draft.postList = action.payload.posts;
        // console.log(draft.postList);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const editArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId !== action.payload.postId) {
            editArr.push(val);
          }
        });
        draft.postList = editArr;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        console.log(numArr[0]);
        if (draft.postList[numArr[0]].liked === true) {
          draft.postList[numArr[0]].likeCount -= 1;
          draft.postList[numArr[0]].liked = false;
        } else {
          draft.postList[numArr[0]].likeCount += 1;
          draft.postList[numArr[0]].liked = true;
        }
      }),
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
  deletePostMiddleware,
  clickLikeMiddleware,
};

export { postCreators };
