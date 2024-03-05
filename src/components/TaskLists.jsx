import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Task from './Task';

function TaskLists({ tasklists }) {
  return (
    <div className="task-lists">
      <ul>
        {tasklists.map((tasklist) => (
          <li key={tasklist.id}>
            <Link to={`/tasklists/${tasklist.id}`}>{tasklist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskLists;
