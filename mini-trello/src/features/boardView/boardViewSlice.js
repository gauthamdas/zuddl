import { createSlice } from '@reduxjs/toolkit';

const boardViewSlice = createSlice({
  name: 'boardView',
  initialState: {
    index: 0
  },
  reducers: {
    changeBoard: (state, action) => {
        state.index = action.payload;
    },
    
  },
});

export const { changeBoard } = boardViewSlice.actions;
export default boardViewSlice.reducer;