import { configureStore } from "@reduxjs/toolkit";
import illustrationReducer from "./ illustrationSlice";
import namberPageReducer from "./namberPageSlice";

export default configureStore({
  reducer: {
    namberPage: namberPageReducer,
    illustration: illustrationReducer,
  },
});
