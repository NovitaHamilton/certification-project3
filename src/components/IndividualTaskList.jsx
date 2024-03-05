import React from 'react';
import { useParams } from 'react-router-dom';
import Task from './Task';

function IndividualTaskList({ tasklists }) {
  const { id } = useParams();
  const taskId = parseInt(id);

  // Find the task list with the specified ID
  const selectedTaskList = tasklists.find((tasklist) => tasklist.id === taskId);

  return (
    <div className="individual-task">
      <h1>{selectedTaskList.name}</h1>
      <ul>
        {/* Render tasks for the individual task list*/}
        {selectedTaskList.tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndividualTaskList;
