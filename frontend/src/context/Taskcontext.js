import React, { createContext, useState, useEffect } from 'react';
import { getAllTasks, createTask, updateTask, deleteTask, markTaskAsComplete } from '../service/api.js';

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error retrieving tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTaskItem = async (taskId, updatedData) => {
    try {
      await updateTask(taskId, updatedData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedData } : task))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTaskItem = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const markTaskComplete = async (taskId) => {
    try {
      await markTaskAsComplete(taskId);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))
      );
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskItem, deleteTaskItem, markTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
