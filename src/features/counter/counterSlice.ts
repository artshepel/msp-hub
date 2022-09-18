import { createSlice } from '@reduxjs/toolkit';

interface IncrementActionInterface {
  payload: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state: number, action: IncrementActionInterface): number => {
      return (state += action.payload);
    },
  },
});

export default counterSlice.reducer;
export const { increment } = counterSlice.actions;
