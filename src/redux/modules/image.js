import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션
const UPLOADING = "UPLOADING";
const SET_PREVIEW = "SET_PREVIEW";
const SET_POSTPREVIEW = "SET_POSTPREVIEW";

// 액션 생성
const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const setPreview = createAction(SET_PREVIEW, (profilePreview) => ({profilePreview}));
const setPostPreview = createAction(SET_POSTPREVIEW, (postPreview) => ({postPreview}));

// 초기값
const initialState = {
    imageUrl: '',
    uploading: false,    
    profilePreview: null,
    postPreview: null,
}

// 미들웨어


// 리듀서
export default handleActions({
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),

    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.profilePreview = action.payload.profilePreview;     
    }),    
    [SET_POSTPREVIEW]: (state, action) => produce(state, (draft) => {
        draft.postPreview = action.payload.postPreview;        
    }),    

}, initialState);

const actionCreators = {
    setPreview,
    setPostPreview,
}

export {actionCreators}