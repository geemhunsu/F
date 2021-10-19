import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const GET_POST = 'GET_POST';

const getPost = createAction(GET_POST, (posts) => ({ posts }));

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

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.posts);
        draft.postList = action.payload.posts;
        // console.log(draft.postList);
      }),
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
};

export { postCreators };
