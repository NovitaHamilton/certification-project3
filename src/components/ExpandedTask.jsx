import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SourceIcon from '@mui/icons-material/Source';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FlagIcon from '@mui/icons-material/Flag';

function ExpandedTask({ task, tasklist }) {
  const handleCloseTask = (e) => {
    e.preventDefault();
  };

  const handleEditTask = (e) => {
    e.preventDefault();
  };

  const markTaskComplete = (e) => {
    e.preventDefault();
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
  };

  return (
    <div className="expanded-task">
      <div className="above-task-header">
        <Button onClick={markTaskComplete}>Mark as Complete</Button>
        <CloseIcon className="close-icon" onClick={handleCloseTask} />
      </div>
      <div className="task-header">
        <div>
          <h2>{task.name}</h2>
          <p>Due date: {task.dueDate}</p>
        </div>

        <div className="edit-delete-icons">
          <EditIcon onClick={handleEditTask} />
          <DeleteIcon onClick={handleDeleteTask} />
        </div>
      </div>
      <div className="task-details">
        <p>
          <SourceIcon />
          {tasklist.name}
        </p>
        <p>
          <CheckCircleOutlineIcon />
          {task.status}
        </p>

        <p>
          <FlagIcon />
          {task.priority}
        </p>
      </div>
    </div>
  );
}

export default ExpandedTask;
