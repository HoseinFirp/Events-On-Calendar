import React from "react";

function TodoItem({ task, values, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);

  }

  return (
    <div className={`flex w-80 gap-12 ${task.completed ? "todo-item" : ""} w-max`}>
      <button
        className="bg-red-600 h-6 w-4 self-center rounded-md"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
      <div className=" flex w-max content-center gap-5">
        {values.map((data) => (
          <div key={data.id} className="flex gap-1  content-center  mt-2  w-max">
            <p>{data.year}</p>
            <p>{data.month.name}</p>
            <p>{data.day}</p>
          </div>
        ))}
      </div>
      <p className="self-center ">{task.text}</p>
      {/* <p >{task.map(data=><div className="flex gap-2"><p>{data.year}</p><p>{data.month.name}</p><p>{data.day}</p></div>)}</p> */}
        <input type="checkbox" checked={task.completed} onChange={handleChange} />
    </div>
  );
}
export default TodoItem;
