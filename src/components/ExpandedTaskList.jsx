import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Task from './Task';
import Button from './common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ExpandedTask from './ExpandedTask';
import TaskForm from './TaskForm';

function ExpandedTaskList({ tasklists, setTasklists }) {
  // State to track whether Task List is in editing mode or not
  const [isTasklistEditing, setIsTasklistEditing] = useState(false);
  // State to track edited name
  const [editedName, setEditedName] = useState('');
  // State to track the Expanded Task Id
  const [expandedTaskId, setExpandedTaskId] = useState();
  // State to track if AddTaskForm open
  const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // Reset expandedTaskId when user navigates to a different task list (id change)
  useEffect(() => {
    setExpandedTaskId(null);
  }, [id]);

  // Find the task list with the specified ID
  const tasklist = tasklists.find((tasklist) => tasklist.id === id);

  // onClick Functions

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
    setIsTasklistEditing(true);
    setEditedName(tasklist.name);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const newValue = tasklists.map((tasklist) => {
      if (tasklist.id === id) {
        return { ...tasklist, name: editedName };
      }
      return tasklist;
    });
    setTasklists(newValue);
    setIsTasklistEditing(false);
  };

  const handleSaveToLocalStorage = (e) => {
    e.preventDefault();
    localStorage.setItem('tasklists', JSON.stringify(tasklists));
  };

  const handleToggleExpandedTask = (e, taskId) => {
    // Check if the event is triggered from 'close-icon'
    if (e && e.target.classList.contains('close-icon')) {
      setExpandedTaskId(null); // Close expanded task
    } else {
      setExpandedTaskId(taskId === expandedTaskId ? expandedTaskId : taskId);
    }
  };

  const navigateToTasksLists = () => {
    navigate(`/tasklists`);
  };

  const openAddTaskForm = () => {
    setIsAddTaskFormOpen(true);
  };

  return (
    <div className="expanded-tasklist">
      <CloseIcon
        className="tasklist-close-icon"
        onClick={handleCloseTaskList}
      />
      <div className="tasklist-header">
        {isTasklistEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <h2>{tasklist.name}</h2>
        )}

        <div className="edit-delete-icons">
          {isTasklistEditing ? (
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
      {isAddTaskFormOpen ? (
        <TaskForm
          tasklists={tasklists}
          setTasklists={setTasklists}
          tasklist={tasklist}
          setIsAddTaskFormOpen={setIsAddTaskFormOpen}
        />
      ) : (
        <Button className="add-task-button" onClick={openAddTaskForm}>
          Add Task
        </Button>
      )}
      <div className="tasks-container">
        <ul>
          {/* Render tasks for the individual task list*/}
          {tasklist.tasks.map((task) => (
            <li
              key={task.id}
              role="button"
              onClick={(e) => handleToggleExpandedTask(e, task.id)}
            >
              {expandedTaskId !== task.id ? (
                <Task task={task} />
              ) : (
                <ExpandedTask
                  tasklist={tasklist}
                  task={task}
                  tasklists={tasklists}
                  setTasklists={setTasklists}
                  handleToggleExpandedTask={handleToggleExpandedTask}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="export-json-button">
        <Button onClick={handleSaveToLocalStorage}>Save to localStorage</Button>
      </div>
    </div>
  );
}

export default ExpandedTaskList;
