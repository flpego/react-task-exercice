import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks"

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
