import { configureStore } from "@reduxjs/toolkit";
import namberPageReducer from "./namberPageSlice";
export default configureStore({
  reducer: {
    namberPage: namberPageReducer,
  },
});
