import { configureStore } from '@reduxjs/toolkit';
  import counterSlice from './features/counter/counterSlice';
  import SumSlice from './features/counter/SumSlice';
export const store = configureStore({
  reducer: {
      counter:counterSlice,
      sum:SumSlice

  },
});
