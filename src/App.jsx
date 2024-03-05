import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

/**
 * Importing other components
 */
import Home from './components/Home';
import IndividualTaskList from './components/IndividualTaskList';

const App = () => {
  // State to track tasklists
  const [tasklists, setTasklists] = useState([
    {
      id: 1,
      name: 'Certification Project 4 - CIC',
      tasks: [
        {
          id: 1,
          name: 'Create Wireframe',
          priority: 'Medium',
          dueDate: '2024-03-05',
          status: 'Completed',
        },
        {
          id: 2,
          name: 'Create Flow Chart',
          priority: 'Medium',
          dueDate: '2024-03-05',
          status: 'Completed',
        },
        {
          id: 3,
          name: 'Create Component Tree',
          priority: 'Medium',
          dueDate: '2024-03-06',
          status: 'In progress',
        },
      ],
    },
    {
      id: 2,
      name: 'Miniproject',
      tasks: [
        {
          id: 1,
          name: 'Part 1',
          priority: 'Medium',
          dueDate: '2024-03-01',
          status: 'Completed',
        },
        {
          id: 2,
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
          {/* Render both Home and IndividualTaskList components */}
          <Home tasklists={tasklists} />
          <Routes>
            {/* <Route path="/tasklists/" element={<Home tasklists={tasklists} />} /> */}
            <Route
              path="/tasklists/:id"
              element={<IndividualTaskList tasklists={tasklists} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
