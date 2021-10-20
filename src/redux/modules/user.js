import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import { apis } from '../../lib/axios';

//액션타입
const SET_USER = 'SET_USER';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

const setUser = createAction(SET_USER, (user) => ({ user }));
const updateProfile = createAction(UPDATE_PROFILE, (imageUrl) => ({ imageUrl }));

const initialState = {
  name: 'guest',
  firstName: false,
  lastName: false,
  imageUrl: false,
  is_login: false,
  userList: [],
};

// 프로필 사진 수정
const updateProfileMW = (imageUrl) => {
  return function (dispatch, getState, {history}) {
    apis
      .updateProfileImg(imageUrl)
      .then(res => {
        console.log('유저 프로필 사진 변경 성공')
        // 로그인한 사용자의 정보를 불러오는 디스패치
        console.log('유저 프로필 사진 불러오기 성공')
      }).catch(err => {
        console.log('사진 변경 실패', err)
      })
  }
}
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
  updateProfileMW,
  loginMiddleware,
  signupMiddleware,
  setUser,
};

export { userCreators };
