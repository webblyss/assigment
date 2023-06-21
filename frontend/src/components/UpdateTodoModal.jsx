import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/Taskcontext';

const UpdateTodoModal = ({ todo, onClose }) => {
  const { updateTaskItem } = useContext(TaskContext);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTaskItem(todo.id, { title, description, completed});
    onClose();
  };

  const handleCheckboxChange = (e) => {
    setCompleted(e.target.checked);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Todo</h2>
        <form onSubmit={handleUpdate}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label htmlFor="description">Description</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="form-group">
          <label>
            <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
            Completed
          </label>
        </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodoModal;














