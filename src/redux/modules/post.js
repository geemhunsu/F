import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const GET_POST = 'GET_POST';

const getPost = createAction(GET_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

export default handleActions(
  {
    [GET_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const postCreators = {};

export { postCreators };
