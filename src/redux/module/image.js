import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/apis";

const SET_PREVIEW = "SET_PREVIEW";
const SET_PREVIEW_VIDEO = "SET_PREVIEW_VIDEO";

const setPreview = createAction(SET_PREVIEW, (fileType, preview, file) => ({
  fileType,
  preview,
  file,
}));
const setPreviewVideo = createAction(SET_PREVIEW_VIDEO, (fileVideo) => ({
  fileVideo,
}));

const initialState = {
  uploading: false,
  preview: null,
  fileType: "",
  fileVideo: "",
  // formData: null,
  file: "",
  videourl: "",
};

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.fileType = action.payload.fileType;
        draft.preview = action.payload.preview;
        draft.file = action.payload.file;
      }),
    [SET_PREVIEW_VIDEO]: (state, action) =>
      produce(state, (draft) => {
        draft.fileVideo = action.payload.fileVideo;
      }),
  },
  initialState
);
const actionCreators = {
  setPreview,
  setPreviewVideo,
};

export { actionCreators };
