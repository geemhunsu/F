import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import { apis } from '../../lib/axios';

//액션타입
const SET_USER = 'SET_USER';

//액션생성함수
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  name: 'guest',
  is_login: false,
};

//로그인
const loginMiddleware = (loginInfo) => {
  return () => {
    apis
      .login(loginInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//회원가입
const signupMiddleware = (signupInfo) => {
  return () => {
    apis
      .signup(signupInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userCreators = {
  loginMiddleware,
  signupMiddleware,
  setUser,
};

export { userCreators };
