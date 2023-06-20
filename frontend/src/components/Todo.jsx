import React, { useContext } from "react";
import { TaskContext } from '../context/Taskcontext';

const Todo = () => {
  const { tasks, markTaskComplete, deleteTaskItem } = useContext(TaskContext);
  

  const handleComplete = (taskId) => {
    markTaskComplete(taskId);
  };

  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {uncompletedTasks.map((task) => (
          <div className="todo" key={task.id}>
            <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </li>
            {!task.completed ? (
              <button
                className="complete-btn"
                onClick={() => handleComplete(task.id)}
              >
                <i className="fas fa-check"></i>
              </button>
            ) : null}
            <button className="trash-btn" onClick={() => deleteTaskItem(task.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
        {completedTasks.map((task) => (
          <div className="todo" key={task.id}>
            <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </li>
            {!task.completed ? (
              <button
                className="complete-btn"
                onClick={() => handleComplete(task.id)}
              >
                <i className="fas fa-check"></i>
              </button>
            ) : null}
            <button className="trash-btn" onClick={() => deleteTaskItem(task.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
