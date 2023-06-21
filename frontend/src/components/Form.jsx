import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/Taskcontext';
const Form = () => {
    const {  addTask,updateTaskItem } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAddTask = (e) => {
      e.preventDefault();
      if (title.trim() && description.trim()) {
        addTask(title.trim(), description.trim());
        setTitle('');
        setDescription('');
      }
    };

    

  return (
    <form onSubmit={handleAddTask}>
    <input type="text" className="todo-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
    <input type="text" className="todo-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
    <button class="todo-button" type="submit">
      <i class="fas fa-plus-square"></i>
    </button>
  </form>
  )
}

export default Form



