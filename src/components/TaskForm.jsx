import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu tarea</h1>
        <input className="p-4 mb-5 w-full"
          placeholder="Escribe tu tarea loquito"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        ></input>
        <textarea className="p-4 mb-5 w-full"
          placeholder="Escribe descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-700 px-3 py-1 text-white" 
        
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
