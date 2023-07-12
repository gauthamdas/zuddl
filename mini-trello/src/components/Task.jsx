import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../features/boards/boardsSlice';



function Task({ task }) {
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards);
  function handleTaskContentChange(e){

    // console.log(e.target.id, e.target.value)
    dispatch(updateTask({id:e.target.id, value: e.target.value}))
    console.log(boards)
  }
  return (
    <div key={task.id} className="task">
      <input id={`${task.id}`} type='text' defaultValue={task.content}  onChange={handleTaskContentChange} />
    <span className="task-content">{task.content}</span>
    </div>
  )
}

export default Task;

Task.propTypes = {
    task: PropTypes.object.isRequired,
}