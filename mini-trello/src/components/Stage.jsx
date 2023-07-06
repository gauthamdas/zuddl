
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { createTask } from '../features/boards/boardsSlice';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

function Stage({ board, stage }) {
    const dispatch = useDispatch();
    const handleCreateTask = (boardId, stageId, content) => {
        const taskId = uuidv4();
        dispatch(createTask({ boardId, stageId, taskId, content }));
      };
  return (
    <div key={stage.id} className="stage">
                    <div className="stage-header">
                    <h3 className="stage-name">{stage.name}</h3>
                    <button
                      onClick={() =>
                        handleCreateTask(board.id, stage.id, "New Task")
                      }
                    >
                      Add Task
                    </button>
                    </div>
                    <Droppable droppableId={stage.id} className="drop-area">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {stage.tasks.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Task task={task} />

                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
  )
}

export default Stage;

Stage.propTypes = {
    board: PropTypes.object.isRequired,
    stage: PropTypes.object.isRequired,
}