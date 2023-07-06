import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { createStage, moveTask } from '../features/boards/boardsSlice';
import Stage from './Stage';
import { DragDropContext } from 'react-beautiful-dnd';

function Board({ board }) {

    const dispatch = useDispatch();

    const handleCreateStage = (boardId) => {
        const stageId = uuidv4();
        dispatch(createStage({ boardId, stageId }));
      };

    const handleDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;
    
        if (
          source.droppableId === destination.droppableId &&
          source.index === destination.index
        ) {
          return;
        }
    
        dispatch(moveTask({ draggableId, source, destination }));
      };
  return (
    <div key={board.id} className="board">
            <div className="board-header">

            <h2 className="board-title">{board.name}</h2>
            <button className="add-stage-btn" onClick={() => handleCreateStage(board.id)}>
              Add Stage
            </button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="stage-container">
                {board.stages.map((stage,index) => (
                  <Stage key={index} board={board} stage={stage} />
                ))}
              </div>
            </DragDropContext>
          </div>
  )
}

export default Board

Board.propTypes = {
    board: PropTypes.object.isRequired,
}