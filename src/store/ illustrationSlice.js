import { createSlice } from "@reduxjs/toolkit";
const illustrationSlice = createSlice({
  name: "illustrationSlice",

  initialState: {
    images: [],
    imagesView: false,
    imagesCaunter: 0,
    imagaesLimit: -1,
  },
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    setImagesView(state, action) {
      state.imagesView = action.payload ?? !state.imagesView;
    },
    imagesIncrement(state) {
      state.imagaesLimit > state.imagesCaunter && state.imagesCaunter++;
    },
    imagesDecrement(state) {
      state.imagesCaunter && state.imagesCaunter--;
    },
    imagesReset(state) {
      state.images = [];
      state.imagesView = false;
      state.imagaesLimit = -1;
      state.imagesCaunter = 0;
    },
    setImagesLimit(state, action) {
      state.imagaesLimit = action.payload;
    },
  },
});
export const {
  setImages,
  setImagesView,
  imagesDecrement,
  imagesReset,
  imagesIncrement,
  setImagesLimit,
} = illustrationSlice.actions;
export default illustrationSlice.reducer;
