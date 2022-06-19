import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const SumSlice = createSlice({
  name: "sum",
  initialState,
  reducers: {
   
    
    increment: (state) => {
      state.value += 1;
      
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
});

export const { increment, decrement } = SumSlice.actions;

export const selectCount = (state) => state.sum.value;

export default SumSlice.reducer;
