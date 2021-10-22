import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

//액션타입
const SET_USER = 'SET_USER';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const SET_USERLIST = 'SET_USERLIST';
const SET_USERMODAL = 'SET_USERMODAL';

const setUser = createAction(SET_USER, (user) => ({ user }));
const setUserList = createAction(SET_USERLIST, (userList) => ({ userList }));
const updateProfile = createAction(UPDATE_PROFILE, (imageUrl) => ({ imageUrl }));
const setUserModal = createAction(SET_USERMODAL, state => ({state}));

const initialState = {
  name: 'guest',
  userId: null,
  firstName: null,
  lastName: null,
  imageUrl: null,
  is_login: false,
  userList: [],
  userModalState: 'none',
};

// 프로필 사진 수정
const updateProfileMW = (imageUrl) => {
  return function (dispatch, getState, {history}) {
    apis
      .updateProfileImg(imageUrl)
      .then(res => {                
        dispatch(updateProfile(imageUrl.imageUrl));        
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

// 유저 정보 불러오기
const setUserMiddleware = () => {
  return function (dispatch) {
    apis
      .getUserInfo()
      .then(res => {
        const userId = res.data.userId;
        const firstName = res.data.firstName;
        const lastName = res.data.lastName;
        const imageUrl = res.data.imageUrl;
        dispatch(setUser({userId, firstName, lastName, imageUrl}));
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// 모든 유저 정보 불러오기
const setAllUserMiddleware = () => {
  return function (dispatch) {
    apis
      .getAllUserList()
      .then(res => {
        dispatch(setUserList(res.data.users));
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.userId = action.payload.user.userId;
      draft.firstName = action.payload.user.firstName;
      draft.lastName = action.payload.user.lastName;
      draft.imageUrl = action.payload.user.imageUrl;
      draft.is_login = true;
    }),
    [UPDATE_PROFILE]: (state, action) => produce(state, (draft) => {
      draft.imageUrl = action.payload.imageUrl;
    }),
    [SET_USERLIST]: (state, action) => produce(state, (draft) => {
      draft.userList = action.payload.userList;
    }),
    [SET_USERMODAL]: (state, action) => produce(state, draft => {
      draft.userModalState = action.payload.state;      
    })
  },
  initialState
);

const userCreators = {
  updateProfileMW,
  loginMiddleware,
  signupMiddleware,
  setUserMiddleware,
  setAllUserMiddleware,
  setUser,
  setUserModal,
};

export { userCreators };
