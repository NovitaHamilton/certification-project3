import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Task from './Task';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

function IndividualTaskList({ tasklists, setTasklists }) {
  // State to track whether Task List is in editing mode or not
  const [isEditing, setIsEditing] = useState(false);
  // State to track edited name
  const [editedName, setEditedName] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  // Find the task list with the specified ID
  const tasklist = tasklists.find((tasklist) => tasklist.id === id);

  const handleCloseTaskList = (e) => {
    e.preventDefault();
    navigateToTasksLists();
  };

  const handleDeleteTaskList = (e) => {
    e.preventDefault();
    const newValue = tasklists.filter((tasklist) => tasklist.id !== id);
    setTasklists(newValue);
    navigateToTasksLists();
  };

  const handleEditTaskList = (e) => {
    e.preventDefault();
    setIsEditing(true);
    setEditedName(tasklist.name);
  };
  console.log(editedName);

  const handleSaveEdit = (e) => {
    e.preventDefault();
    console.log('Save Edit button clicked!');
    const newValue = tasklists.map((tasklist) => {
      if (tasklist.id === id) {
        return { ...tasklist, name: editedName };
      }
      return tasklist;
    });
    setTasklists(newValue);
    setIsEditing(false);
    console.log(isEditing);
  };

  const navigateToTasksLists = () => {
    navigate(`/tasklists`);
  };

  const handleExportJson = (e) => {
    e.preventDefault();
  };

  const openAddTaskForm = () => {};

  return (
    <div className="individual-task">
      <CloseIcon className="close-icon" onClick={handleCloseTaskList} />
      <div className="tasklist-header">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <h2>{tasklist.name}</h2>
        )}

        <div className="tasklist-icons">
          {isEditing ? (
            <Button
              className="save-tasklist-edit-button"
              onClick={handleSaveEdit}
            >
              Save Edit
            </Button>
          ) : (
            <EditIcon onClick={handleEditTaskList} />
          )}
          <DeleteIcon onClick={handleDeleteTaskList} />
        </div>
      </div>
      <Button className="add-task-button" onClick={openAddTaskForm}>
        Add Task
      </Button>

      <ul>
        {/* Render tasks for the individual task list*/}
        {tasklist.tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>

      <div className="export-json-button">
        <Button onClick={handleExportJson}>Export as json file</Button>
      </div>
    </div>
  );
}

export default IndividualTaskList;
