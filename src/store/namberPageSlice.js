import { createSlice } from "@reduxjs/toolkit";

const namberPageSlice = createSlice({
  name: "namberPage",

  initialState: {
    count: 0,
    limit: 0,
  },
  reducers: {
    increment(state) {
      state.limit > state.count && state.count++;
    },
    decrement(state) {
      state.count && state.count--;
    },
    reset(state) {
      state.limit = 0;
      state.count = 0;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});
export const { increment, decrement, reset, setLimit } =
  namberPageSlice.actions;
export default namberPageSlice.reducer;
