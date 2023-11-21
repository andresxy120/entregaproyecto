import { createSlice } from '@reduxjs/toolkit';

const Counterslice = createSlice({
  name: 'counter',
  initialState: {
  },
  reducers: {
    
  },

});

export const { increment, decrement } = Counterslice.actions;
export default Counterslice.reducer;