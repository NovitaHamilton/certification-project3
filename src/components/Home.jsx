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
    setTasklists([...tasklists, newTaskList]);
    navigate(`/tasklists/${newTaskList.id}`); // to navigate to the newTaskList route
  };

  return (
    <div className="Home">
      <h1>My Task Lists</h1>
      <Button onCLick={handleAddTaskList}>Add Task List</Button>
      <div>
        <TaskLists tasklists={tasklists} />
      </div>
    </div>
  );
}

export default Home;
