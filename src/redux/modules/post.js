import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';
import PostWrite from '../../components/PostWrite';

const ADD_POST = 'ADD_POST';
const GET_POST = 'GET_POST';
const DELETE_POST = 'DELETE_POST';

const addPost = createAction(ADD_POST, post => ({ post }));
const getPost = createAction(GET_POST, posts => ({ posts }));
const deletePost = createAction(DELETE_POST, postId => ({ postId }));

const initialState = {
  postList: [],
};

const addPostMiddleware = postInfo => {
  console.log(postInfo);
  return dispatch => {
    apis
      .addPost(postInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getPostMiddleware = page => {
  console.log(page);
  return dispatch => {
    apis
      .getPost(page)
      .then(res => {
        console.log(res);
        // const postArr = {
        //   posts: res,
        // };
        dispatch(getPost(res));
        // console.log('finish');
      })
      .catch(res => {
        console.log(res);
      });
  };
};

const deletePostMiddleware = postId => {
  return dispatch => {
    apis
      .then(res => {
        console.log(res);
        dispatch(deletePost(postId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, draft => {
        console.log(action.payload);
        draft.list.unshift(action.payload.posts.list);
      }),

    [GET_POST]: (state, action) =>
      produce(state, draft => {
        console.log(action.payload.posts);
        draft.postList = action.payload.posts;
        // console.log(draft.postList);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, draft => {
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
  addPostMiddleware,
  getPostMiddleware,
  deletePostMiddleware,
};

export { postCreators };
