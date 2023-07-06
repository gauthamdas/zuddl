import PropTypes from 'prop-types'

function Task({ task }) {
  return (
    <div key={task.id} className="task">
    <span className="task-content">{task.content}</span>
    </div>
  )
}

export default Task;

Task.propTypes = {
    task: PropTypes.object.isRequired,
}