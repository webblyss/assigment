import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/Taskcontext';
import {BsTrash3} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'

const TaskList = () => {
  const { tasks, addTask, markTaskComplete, deleteTaskItem } = useContext(TaskContext);
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
    <div>
      <header>
        <h1>Task Todo List</h1>
      </header>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          className="todo-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="todo-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="todo-button" type="submit">
          submit
        </button>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {tasks.map((task) => (
           <div key={task.id} className='w-full flex justify-between mt-5'>
            <span className='text-yellow-700'>{task.title}</span>
            <div>
            <BsTrash3/>
            <TiTick/>
            </div>
           </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;

