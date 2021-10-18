import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_USER = 'SET_USER';

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  name: 'guest',
  is_login: false,
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userCreators = {};

export { userCreators };
