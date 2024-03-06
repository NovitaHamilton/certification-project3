import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Task from './Task';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

function IndividualTaskList({ tasklists }) {
  const navigate = useNavigate();
  const backToTaskLists = (e) => {
    e.preventDefault();
    navigate(`/tasklists`);
  };

  const openAddTaskForm = () => {};

  const { id } = useParams();
  // Find the task list with the specified ID
  const tasklist = tasklists.find((tasklist) => tasklist.id === id);

  return (
    <div className="individual-task">
      <CloseIcon onClick={backToTaskLists} />
      <h2>{tasklist.name}</h2>
      <Button onCLick={openAddTaskForm}>Add Task</Button>
      <div>
        <DeleteIcon />
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
