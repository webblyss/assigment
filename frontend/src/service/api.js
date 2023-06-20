// api.js

const BASE_URL = 'http://127.0.0.1:8000/api/tasks/';

// Retrieve all tasks
export const getAllTasks = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

// Create a new task
export const createTask = async (title,description) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title,description}),
  });
  const data = await response.json();
  return data;
};

// Update a task
export const updateTask = async (taskId, updatedData) => {
  const response = await fetch(`${BASE_URL}${taskId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  return data;
};

// Delete a task
export const deleteTask = async (taskId) => {
  await fetch(`${BASE_URL}${taskId}/`, {
    method: 'DELETE',
  });
};

// Mark a task as completed
export const markTaskAsComplete = async (taskId) => {
  const idInteger = parseInt(taskId, 10);
  const response = await fetch(`${BASE_URL}${idInteger}/complete/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
