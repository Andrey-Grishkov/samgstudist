import { createSlice } from "@reduxjs/toolkit";

const namberPageSlice = createSlice({
  name: "namberPage",

  initialState: {
    counter: 0,
    limit: -1,
  },
  reducers: {
    increment(state) {
      state.limit > state.counter && state.counter++;
    },
    decrement(state) {
      state.counter && state.counter--;
    },
    reset(state) {
      state.limit = -1;
      state.counter = 0;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});
export const { increment, decrement, reset, setLimit } =
  namberPageSlice.actions;
export default namberPageSlice.reducer;
