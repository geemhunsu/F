import axios from 'axios';
import { setCookie } from '../shared/Cookie';
import { history } from '../redux/ConfigureStore';

const instance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'http://13.125.243.106:8080',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  config => {
    const cookie = document.cookie;
    console.log(cookie);
    if (cookie === '') {
      return config;
    }
    // const cookieSplitUndefined = cookie.split('=')[1];
    // console.log(cookieSplitUndefined);
    // const cookieSplit = cookieSplitUndefined.split(';')[0];
    // console.log(cookieSplit);

    const cookieSplit = cookie.split('=')[1];

    config.headers = {
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json',
      Authorization: `Bearer ${cookieSplit}`,
    };
    return config;
  },
  err => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  success => {
    console.log(success);
    const response = success.data;
    console.log(response.token);

    if (response.statusCode === 200 && response.responseMessage === '로그인 성공') {
      let userCookie = success.data.token;
      console.log(userCookie);
      setCookie('user_id', userCookie, 3);
      window.alert('로그인성공');
      history.push('/main');
    }

    if (response.statusCode === 200 && response.responseMessage === '게시글 조회 성공') {
      return response.posts;
    }

    if (response.statusCode === 200 && response.responseMessage === '회원가입 성공') {
      window.alert('회원가입성공');
      history.push('/');
      return response.posts;
    }

    return success;
  },
  error => {
    console.log(error.response);
    //비밀번호가 비워있을 떄
    if (error.response.data.statusCode === 400 && error.response.data.responseMessage === '비밀번호를 입력해주세요') {
      return window.alert('비밀번호를 입력해주세요');
    }
    if (error.response.data.statusCode === 400 && error.response.data.responseMessage === '회원 정보를 찾을 수 없습니다.') {
      return window.alert('회원 정보를 찾을 수 없습니다');
    }

    if (error.response.data.statusCode === 400 && error.response.data.responseMessage === '이름을 입력해주세요') {
      return window.alert('이름을 입력해주세요');
    }
    //올바르지 않은 이메일 형식
    if (error.response.data.statusCode === 400 && error.response.data.responseMessage === '이메일 형식이 올바르지 않습니다') {
      return window.alert('이메일 형식이 올바르지 않습니다');
    }

    if (error.response.data.statusCode === 400 && error.response.data.responseMessage === '비밀번호는 6~20자리로 해주세요') {
      return window.alert('비밀번호는 6~20자리로 해주세요');
    }

    return error;
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: loginInfo => instance.post('/user/login', loginInfo),
  signup: registerInfo => instance.post('/user/register', registerInfo),

  // 유저 관련 api
  updateProfileImg: imageUrl => instance.put(`/user/image`, imageUrl),
  getUserInfo: () => instance.get('/user/info'),
  getAllUserList: () => instance.get('/user/list'),

  //포스트 관련 api
  getPost: () => instance.get('/post'),
  //data.json용
  // getPost: () => instance.get(`/post`),
  addPost: postInfo => instance.post(`/post`),
  deletePost: postId => instance.delete(`/post/${postId}`),
  clickLike: postId => instance.post(`/post/${postId}/like`),
  addComment: commentInfo => instance.post('/comment', commentInfo),
  deleteComment: commentId => instance.delete(`/comment/${commentId}`),
  editComment: (commentId, content) => instance.put(`/comment/${commentId}`, content),
};
