import { createSlice } from '@reduxjs/toolkit';

const boardViewSlice = createSlice({
  name: 'boardView',
  initialState: {
    index: -1
  },
  reducers: {
    changeBoard: (state, action) => {
        state.index = action.payload;
    },
    
  },
});

export const { changeBoard } = boardViewSlice.actions;
export default boardViewSlice.reducer;