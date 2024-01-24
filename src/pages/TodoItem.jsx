import React, { useEffect } from "react";
import { useUser } from "../user/userSlice";

function TodoItem({ task, values, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  const user = useUser();
  console.log(task);
  return (
    <div className={`flex gap-12 ${task.completed ? "todo-item" : ""} w-max`}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p className="self-center ">{task.text}</p>
      {/* <p >{task.map(data=><div className="flex gap-2"><p>{data.year}</p><p>{data.month.name}</p><p>{data.day}</p></div>)}</p> */}
      <div className="">
        {values.map((data) => (
          <div className="flex gap-2 w-max">
            <p>{data.year}</p>
            <p>{data.month.name}</p>
            <p>{data.day}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-red-600 h-6 w-4 self-center rounded-md"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}
export default TodoItem;
