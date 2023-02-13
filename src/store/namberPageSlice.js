import { createSlice } from "@reduxjs/toolkit";
import { numberPageLimit } from "../utils/constants";

const namberPageSlice = createSlice({
  name: "namberPage",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      numberPageLimit > state.count && state.count++;
    },
    decrement(state, action) {
      state.count && state.count--;
    },
    reset(state, action) {
      state.count = 0;
    },
  },
});
export const { increment, decrement, reset } = namberPageSlice.actions;
export default namberPageSlice.reducer;
