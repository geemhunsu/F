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
  (config) => {
    const cookie = document.cookie;
    if (cookie === '') {
      return config;
    }
    const cookieSplit = cookie.split('=')[1];

    config.headers = {
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json',
      Authorization: `Bearer ${cookieSplit}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  (success) => {
    console.log(success);
    const response = success.data;
    console.log(response.token);

    if (
      response.statusCode === 200 &&
      response.responseMessage === '로그인 성공'
    ) {
      let userCookie = success.data.token;
      console.log(userCookie);
      setCookie('user_id', userCookie, 3);
      window.alert('로그인성공');
      history.push('/main');
    }

    if (
      response.statusCode === 200 &&
      response.responseMessage === '게시글 조회 성공'
    ) {
      return response.posts;
    }

    return success;
  },
  (error) => {
    console.log(error.response);
    //비밀번호가 비워있을 떄
    if (
      error.statusCode === 400 &&
      error.responseMessage === '비밀번호를 입력해주세요'
    ) {
      window.alert('비밀번호를 입력해주세요');
    }

    if (
      error.statusCode === 400 &&
      error.responseMessage === '이름을 입력해주세요'
    ) {
      window.alert('이름을 입력해주세요');
    }
    //올바르지 않은 이메일 형식
    if (
      error.statusCode === 400 &&
      error.responseMessage === '이메일 형식이 올바르지 않습니다'
    ) {
      window.alert('이메일 형식이 올바르지 않습니다');
    }

    if (
      error.statusCode === 400 &&
      error.responseMessage === '비밀번호는 6~20자리로 해주세요'
    ) {
      window.alert('비밀번호는 6~20자리로 해주세요');
    }

    return error;
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  signup: (registerInfo) => instance.post('/user/register', registerInfo),

  // 유저 관련 api
  updateProfileImg: (imageUrl) => instance.put(`/user/image`, imageUrl),
  getUserInfo: () => instance.get('/user/info'),
  getAllUserList: () => instance.get('/user/list'),

  //포스트 관련 api
  getPost: (page) => instance.get(`/post?page=${page}`),
  //data.json용
  // getPost: () => instance.get(`/post`),
  deletePost: (postId) => instance.get(`post/${postId}`),
};
