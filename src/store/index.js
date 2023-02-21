import { configureStore } from "@reduxjs/toolkit";
import illustrationReducer from "./ illustrationSlice";
import namberPageReducer from "./namberPageSlice";
import {pageTitleReducer} from "./pageTitleReducer";

export default configureStore({
  reducer: {
    namberPage: namberPageReducer,
    illustration: illustrationReducer,
    title: pageTitleReducer
  },
});
