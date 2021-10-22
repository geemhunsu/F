import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';
import PostWrite from '../../components/PostWrite';

const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const CLICK_LIKE = 'CLICK_LIKE';
const ADD_COMMENT = 'ADD_COMMENT';
const SET_DETAILPOSTID = 'SET_DETAILPOSTID';
const DELETE_COMMENT = 'DELETE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';

const getPost = createAction(GET_POST, (posts) => ({ posts }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (postId, post) => ({
  postId,
  post,
}));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const clickLike = createAction(CLICK_LIKE, (postId) => ({ postId }));
const addComment = createAction(ADD_COMMENT, (commentInfo, postId) => ({
  commentInfo,
  postId,
}));
const setDetailPostId = createAction(SET_DETAILPOSTID, (postId) => ({
  postId,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId, postId) => ({
  commentId,
  postId,
}));
const editComment = createAction(EDIT_COMMENT, (commentInfo, postId) => ({
  commentInfo,
  postId,
}));

const initialState = {
  postList: [],
  detailPostId: null,
};

const getPostMiddleware = (page) => {
  console.log(page);
  return (dispatch) => {
    apis
      .getPost(page)
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

const addPostMiddleware = (postInfo) => {
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
      .then((res) => {
        console.log(res.data.post);
        console.log(res.data);
        dispatch(addPost(res.data.post));
        history.push('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updatePostMiddleware = (postId, postInfo) => {
  return (dispatch) => {
    apis
      .updatePost(postId, postInfo)
      .then((res) => {
        console.log(res);
        dispatch(updatePost(postId, res.data.post));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deletePostMiddleware = (postId) => {
  return (dispatch) => {
    apis
      .deletePost(postId)
      .then((res) => {
        console.log(res);
        if (res === undefined) {
          return;
        }
        dispatch(deletePost(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const clickLikeMiddleware = (postId) => {
  return (dispatch) => {
    apis
      .clickLike(postId)
      .then((res) => {
        console.log(res);
        dispatch(clickLike(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentMiddleware = (commentInfo) => {
  return (dispatch) => {
    apis
      .addComment(commentInfo)
      .then((res) => {
        console.log(res);
        dispatch(addComment(res.data.comment, commentInfo.postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteCommentMiddleware = (commentId) => {
  return (dispatch) => {
    apis
      .deleteComment(commentId)
      .then((res) => {
        console.log(res);

        dispatch(deleteComment(commentId, res.data.postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editCommentMiddleware = (commentId, contentInfo) => {
  return (dispatch) => {
    console.log(commentId, contentInfo);
    apis
      .editComment(commentId, contentInfo)
      .then((res) => {
        console.log(res);
        dispatch(editComment(res.data.comment, res.data.postId));
      })
      .catch((err) => {
        console.log(err);
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
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        console.log(draft);
        draft.postList.unshift(action.payload.post);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.postList.indexOf(
          (p) => p.postId === action.payload.postId
        );
        draft.postList[idx + 1] = action.payload.post;
        
        // draft.postList.map(post => {
        //   if(post.postId === action.payload.postId){
        //     console.log(post.postId, action.payload.postId);
        //     post = action.payload.post;            
        //   }          
        // })
      }),
    [SET_DETAILPOSTID]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPostId = action.payload.postId;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const editArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId !== action.payload.postId) {
            editArr.push(val);
          }
        });
        draft.postList = editArr;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
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
      produce(state, (draft) => {
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
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        let cleanArr = [];
        draft.postList[numArr[0]].comments.filter((val, idx) => {
          if (val.commentId !== action.payload.commentId) {
            return cleanArr.push(val);
          }
        });
        draft.postList[numArr[0]].comments = cleanArr;
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.postList.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        let editArr = [];
        draft.postList[numArr[0]].comments.filter((val, idx) => {
          if (val.commentId === action.payload.commentInfo.commentId) {
            editArr.push(action.payload.commentInfo);
          } else {
            editArr.push(val);
          }
        });
        draft.postList[numArr[0]].comments = editArr;
      }),
  },
  initialState
);

const postCreators = {
  getPostMiddleware,
  addPostMiddleware,
  updatePostMiddleware,
  deletePostMiddleware,
  clickLikeMiddleware,
  addCommentMiddleware,
  setDetailPostId,
  deleteCommentMiddleware,
  editCommentMiddleware,
};

export { postCreators };
