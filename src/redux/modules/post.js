import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';
const DELETE_POST = 'DELETE_POST';

const getPost = createAction(GET_POST, (posts) => ({ posts }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

const initialState = {
  postList: [],
};

const getPostMiddleware = () => {
  return (dispatch) => {
    apis
      .getPost()
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
      .then((res) => {
        console.log(res);
        dispatch(deletePost(postId));
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
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
  deletePostMiddleware,
};

export { postCreators };
