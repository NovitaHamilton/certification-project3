import TaskLists from './TaskLists';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './common/Button';
import { useNavigate } from 'react-router-dom';

function Home({ tasklists, setTasklists }) {
  // To access navigate function
  const navigate = useNavigate();

  const handleAddTaskList = (e) => {
    e.preventDefault();
    const newTaskList = {
      id: uuidv4(),
      name: 'New Task List',
      tasks: [],
    };
    const newValue = [...tasklists, newTaskList];
    setTasklists(newValue);
    navigate(`/tasklists/${newTaskList.id}`); // to navigate to the newTaskList route
  };

  const handleLoadLocalStorage = (e) => {
    e.preventDefault();
    // Retrieve data from localStorage
    const storedTasklists = localStorage.getItem('tasklists');
    if (storedTasklists) {
      // Parse JSON string into an array of task lists
      const parsedTasklists = JSON.parse(storedTasklists);
      console.log('Parsedtasklist:', parsedTasklists);
      // Update state with the loaded task lists
      setTasklists(parsedTasklists);
      console.log(tasklists);
    } else {
      // If no data found in localStorage, display error message
      console.error('No data found in localStorage');
    }
  };

  return (
    <div className="Home">
      <h1>My Task Lists</h1>
      <div className="tasklists-buttons">
        <Button onClick={handleAddTaskList}>Add Task List</Button>
        <Button onClick={handleLoadLocalStorage}>Load localStorage</Button>
      </div>
      <div>
        <TaskLists tasklists={tasklists} />
      </div>
    </div>
  );
}

export default Home;
