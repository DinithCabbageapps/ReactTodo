import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: "",
  },
  reducers: {
    gettodos: (state, strval) => {
      state.value = strval.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { gettodos } = todoSlice.actions;

export default todoSlice.reducer;
