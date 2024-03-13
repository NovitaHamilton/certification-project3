import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

/**
 * Importing other components
 */
import Home from './components/Home';
import ExpandedTaskList from './components/ExpandedTaskList';

const App = () => {
  // State to track tasklists
  const [tasklists, setTasklists] = useState([
    {
      id: '1',
      name: 'Certification Project 4 - CIC',
      tasks: [
        {
          id: '1',
          name: 'Create Wireframe',
          priority: 'Medium',
          dueDate: '2024-03-05',
          status: 'Completed',
        },
        {
          id: '2',
          name: 'Create Flow Chart',
          priority: 'Medium',
          dueDate: '2024-03-05',
          status: 'Completed',
        },
        {
          id: '3',
          name: 'Create Component Tree',
          priority: 'Medium',
          dueDate: '2024-03-06',
          status: 'In progress',
        },
      ],
    },
    {
      id: '2',
      name: 'Miniproject',
      tasks: [
        {
          id: '1',
          name: 'Part 1',
          priority: 'Medium',
          dueDate: '2024-03-01',
          status: 'Completed',
        },
        {
          id: '2',
          name: 'Part 2',
          priority: 'Medium',
          dueDate: '2024-03-01',
          status: 'Completed',
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/tasklists">Task Lists</Link>
            </li>
          </ul>
        </nav>
        <div className="main-page">
          <Routes>
            <Route
              path="/"
              element={
                <Home tasklists={tasklists} setTasklists={setTasklists} />
              }
            />
            <Route
              path="/tasklists/"
              element={
                <Home tasklists={tasklists} setTasklists={setTasklists} />
              }
            />

            {/* Render both Home and IndividualTaskList components */}
            <Route
              path="/tasklists/:id"
              element={
                <>
                  <Home tasklists={tasklists} setTasklists={setTasklists} />
                  <ExpandedTaskList
                    tasklists={tasklists}
                    setTasklists={setTasklists}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
