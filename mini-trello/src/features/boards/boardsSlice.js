import { createSlice } from '@reduxjs/toolkit';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [],
  reducers: {
    createBoard: (state, action) => {
      state.push({
        id: action.payload,
        name: `Board ${state.length + 1}`,
        stages: [],
      });
    },
    createStage: (state, action) => {
      const board = state.find(board => board.id === action.payload.boardId);
      if (board) {
        board.stages.push({
          id: action.payload.stageId,
          name: `Stage ${board.stages.length + 1}`,
          tasks: [],
        });
      }
    },
    createTask: (state, action) => {
      const { boardId, stageId, taskId, content } = action.payload;
      const board = state.find(board => board.id === boardId);
      if (board) {
        const stage = board.stages.find(stage => stage.id === stageId);
        if (stage) {
          stage.tasks.push({ id: taskId, content });
        }
      }
    },
    updateTask: (state,action) => {
      const { id, value } = action.payload;
      // console.log(id,value)

      const task = state
        .flatMap(board => board.stages)
        .flatMap(stage => stage.tasks)
        .find(task => task.id === id);
      
        task.content = value
     

    },
    moveTask: (state, action) => {
      const { draggableId, source, destination } = action.payload;
      console.log(action.payload)
      const sourceStage = state
        .flatMap(board => board.stages)
        .find(stage => stage.id === source.droppableId);
      const destinationStage = state
        .flatMap(board => board.stages)
        .find(stage => stage.id === destination.droppableId);

      const task = sourceStage.tasks.find(task => task.id === draggableId);
      if (task) {
        sourceStage.tasks.splice(source.index, 1);
        destinationStage.tasks.splice(destination.index, 0, task);
      }
    },
  },
});

export const { setBoard, createBoard, createStage, createTask, updateTask, moveTask } = boardsSlice.actions;
export default boardsSlice.reducer;