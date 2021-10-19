import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션
const UPLOADING = "UPLOADING";
const SET_PREVIEW = "SET_PREVIEW";

// 액션 생성
const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const setPreview = createAction(SET_PREVIEW, (preview, name, type, full, file) => ({preview, name, type, full, file}));

// 초기값
const initialState = {
    imageUrl: '',
    uploading: false,
    preview: null,
    previewName: null,
    previewType: null,
    previewFullName: null,
    previewFile: null,
}

// 미들웨어


// 리듀서
export default handleActions({
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),

    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
        draft.previewName = action.payload.name;
        draft.previewType = action.payload.type;
        draft.previewFullName = action.payload.full;
        draft.previewFile = action.payload.file;        
    }),

}, initialState);

const actionCreators = {
    setPreview,
}

export {actionCreators}