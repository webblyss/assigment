import React from 'react';
import { TaskContextProvider } from './context/Taskcontext';
import Form from './components/Form';
import Todo from './components/Todo';

const App = () => { 
  return (
    <TaskContextProvider>
     <>
     <header>
      <h1>My Todo List</h1>
    </header>
    <Form/>
    <Todo/>
     </>
    </TaskContextProvider>
  );
};

export default App;
