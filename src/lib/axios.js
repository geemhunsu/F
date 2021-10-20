import axios from 'axios';
// import { history } from '../redux/ConfigureStore';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
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
    const response = success.data[0];
    if (
      response.statusCode === 200 &&
      response.responseMessage === '게시글 조회 성공'
    ) {
      return response.posts;
    }
    return success;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  signup: (registerInfo) => instance.post('/user/register', registerInfo),
  // updateProfileImg: (pro)

  //포스트 관련 api
  // getPost: () => instance.get(`/post?page=${page}`),
  //data.json용
  getPost: () => instance.get(`/post`),
};
