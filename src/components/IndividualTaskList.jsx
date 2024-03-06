import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Task from './Task';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

function IndividualTaskList({ tasklists, setTasklists }) {
  const navigate = useNavigate();

  const { id } = useParams();
  // Find the task list with the specified ID
  const tasklist = tasklists.find((tasklist) => tasklist.id === id);
  console.log(tasklist);

  const handleCloseTaskList = (e) => {
    e.preventDefault();
    navigateToTasksLists();
  };

  const handleDeleteTaskList = (e) => {
    e.preventDefault();
    const newValue = tasklists.filter((tasklist) => tasklist.id !== id);
    console.log(newValue);
    setTasklists(newValue);
    navigateToTasksLists();
  };

  const navigateToTasksLists = () => {
    navigate(`/tasklists`);
  };

  const openAddTaskForm = () => {};

  return (
    <div className="individual-task">
      <CloseIcon onClick={handleCloseTaskList} />
      <h2>{tasklist.name}</h2>
      <Button onCLick={openAddTaskForm}>Add Task</Button>
      <div>
        <DeleteIcon onClick={handleDeleteTaskList} />
        <EditIcon />
      </div>

      <ul>
        {/* Render tasks for the individual task list*/}
        {tasklist.tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndividualTaskList;
