import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SourceIcon from '@mui/icons-material/Source';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FlagIcon from '@mui/icons-material/Flag';
import TaskForm from './TaskForm';

function ExpandedTask({
  task,
  tasklist,
  tasklists,
  setTasklists,
  handleToggleExpandedTask,
}) {
  const [isTaskEditing, setIsTaskEditing] = useState(false);

  const handleCloseTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleToggleExpandedTask(e);
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    setIsTaskEditing(true);
  };

  const markTaskComplete = (e) => {
    e.preventDefault();
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    const newTasks = tasklist.tasks.filter((item) => item.id !== task.id);
    const updatedTasklists = tasklists.map((list) => {
      //if the tasklist id matches this particular id
      if (list.id === tasklist.id) {
        // Update the tasks array with the newTasks
        return { ...list, tasks: newTasks };
      }
      return list;
    });
    setTasklists(updatedTasklists);
  };

  return (
    <div className="expanded-task">
      {!isTaskEditing ? (
        <>
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
        </>
      ) : (
        <TaskForm
          tasklists={tasklists}
          setTasklists={setTasklists}
          tasklist={tasklist}
          setIsTaskEditing={setIsTaskEditing}
          taskToEdit={{ ...task, taskList: tasklist.name }}
        />
      )}
    </div>
  );
}

export default ExpandedTask;
