import TaskLists from './TaskLists';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './common/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndividualTaskList from './IndividualTaskList';

function Home({ tasklists }) {
  // State to track if Add Task List form is open
  const [addTaskListFormOpen, setAddTaskListFormOpen] = useState(false);

  const openAddTaskListForm = () => {
    setAddTaskListFormOpen(true);
  };

  const closeAddTaskListForm = () => {
    setAddTaskListFormOpen(false);
  };

  return (
    <div className="Home">
      <h1>My Task Lists</h1>
      <Button onCLick={openAddTaskListForm}>Add Task List</Button>
      <div>
        <TaskLists tasklists={tasklists} />
      </div>
    </div>
  );
}

export default Home;
