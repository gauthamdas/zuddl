// store.js
import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from '../features/boards/boardsSlice';
import boardViewSlice from '../features/boardView/boardViewSlice';

const store = configureStore({
  reducer: {
    boards: boardsSlice,
    boardView: boardViewSlice,
  },
});

export default store;
