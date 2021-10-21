import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';
import PostWrite from '../../components/PostWrite';

const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const CLICK_LIKE = 'CLICK_LIKE';
const ADD_COMMENT = 'ADD_COMMENT';

const getPost = createAction(GET_POST, posts => ({ posts }));
const addPost = createAction(ADD_POST, post => ({ post }));
const deletePost = createAction(DELETE_POST, postId => ({ postId }));
const clickLike = createAction(CLICK_LIKE, postId => ({ postId }));
const addComment = createAction(ADD_COMMENT, (commentInfo, postId) => ({
  commentInfo,
  postId,
}));

const initialState = {
  postList: [],
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

const addPostMiddleware = postInfo => {
  console.log(postInfo);
  return (dispatch, getState, { history }) => {
    // let _user = getState().user;
    // console.log(_user);
    // let post = {
    //   postId: '',
    //   commentCount: 0,
    //   commnet: [],
    //   content: postInfo.content,
    //   createdAt: '',
    //   firstName: _user.firstName,
    //   lastName: _user.lastName,
    //   image_url: postInfo.imageUrl,
    //   likeCount: 0,
    //   liked: false,
    //   postId: '',
    // };
    apis
      .addPost(postInfo)
      .then(res => {
        console.log(res.data.post);
        dispatch(addPost(res.data.post));
        history.push('/main');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const deletePostMiddleware = postId => {
  return dispatch => {
    apis
      .deletePost(postId)
      .then(res => {
        console.log(res);
        dispatch(deletePost(postId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const clickLikeMiddleware = postId => {
  return dispatch => {
    apis
      .clickLike(postId)
      .then(res => {
        console.log(res);
        dispatch(clickLike(postId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const addCommentMiddleware = commentInfo => {
  return dispatch => {
    apis
      .addComment(commentInfo)
      .then(res => {
        console.log(res);
        dispatch(addComment(res.data.comment, commentInfo.postId));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        console.log(action.payload.posts);
        draft.postList = action.payload.posts;
        // console.log(draft.postList);
      }),
    [ADD_POST]: (state, action) =>
      produce(state, draft => {
        console.log(action.payload);
        draft.list.unshift(action.payload.posts.list);
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
    [CLICK_LIKE]: (state, action) =>
      produce(state, draft => {
        let numArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        console.log(numArr[0]);
        if (draft.postList[numArr[0]].liked === true) {
          draft.postList[numArr[0]].likeCount -= 1;
          draft.postList[numArr[0]].liked = false;
        } else {
          draft.postList[numArr[0]].likeCount += 1;
          draft.postList[numArr[0]].liked = true;
        }
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, draft => {
        let numArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        console.log(numArr);
        // draft.postList[numArr[0]].comment.push(action.payload.commentInfo);
        draft.postList[numArr[0]].comments.push(action.payload.commentInfo);
        draft.postList[numArr[0]].commentCount += 1;
      }),
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
  addPostMiddleware,
  deletePostMiddleware,
  clickLikeMiddleware,
  addCommentMiddleware,
};

export { postCreators };
