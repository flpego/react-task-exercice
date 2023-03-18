import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-600 text-white p-4 rounded-md ">
      <h1 className="text-xl font-bold capitalize ">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-400 px-3 py-2 rounded-md mt-5 mx-auto hover:bg-red-700 hover:text-zinc-900 "
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default TaskCard;
