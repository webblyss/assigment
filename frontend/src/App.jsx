import React from 'react';
import { TaskContextProvider } from './context/Taskcontext';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
};

export default App;
