import React, { useContext, useState } from "react";
import { TaskContext } from '../context/Taskcontext';
import UpdateTodoModal from './UpdateTodoModal';

const Todo = () => {
  const { tasks, markTaskComplete, deleteTaskItem, updateTaskItem } = useContext(TaskContext);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleComplete = (taskId) => {
    markTaskComplete(taskId);
  };

  const handleOpenUpdateModal = (todo) => {
    setSelectedTodo(todo);
  };

  const handleCloseUpdateModal = () => {
    setSelectedTodo(null);
  };

  const handleUpdateTodo = (taskId, updatedData) => {
    updateTaskItem(taskId, updatedData);
    setSelectedTodo(null);
  };

  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {uncompletedTasks.map((task) => (
          <div className="todo" key={task.id}>
            <li className={`todo-item ${task.completed ? 'completed' : ''}`}  onClick={() => handleOpenUpdateModal(task)}>
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
      {selectedTodo && (
        <UpdateTodoModal todo={selectedTodo} onUpdate={handleUpdateTodo} onClose={handleCloseUpdateModal} />
      )}
    </div>
  );
};

export default Todo;
