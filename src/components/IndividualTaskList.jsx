import React from 'react';
import { useParams } from 'react-router-dom';
import Task from './Task';
import Button from './common/Button';

function IndividualTaskList({ tasklists }) {
  const { id } = useParams();

  const openAddTaskForm = () => {};

  // Find the task list with the specified ID
  const tasklist = tasklists.find((tasklist) => tasklist.id === id);

  return (
    <div className="individual-task">
      <h1>{tasklist.name}</h1>
      <Button onCLick={openAddTaskForm}>Add Task</Button>
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
