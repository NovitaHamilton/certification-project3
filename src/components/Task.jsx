function Task({ task }) {
  return (
    <div className="task-item">
      <p>{task.name}</p>
      <p>{task.priority}</p>
      <p>{task.dueDate}</p>
      <p>{task.status}</p>
    </div>
  );
}

export default Task;
