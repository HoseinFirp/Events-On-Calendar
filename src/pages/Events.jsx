import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TodoItem from "./TodoItem";

export default function Example() {
  const [values, setValues] = useState([
    new DateObject({ calendar: persian, locale: persian_fa }), //امروز
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "day"), //فردا
  ]);

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask(text) {
    if (text) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
        values: [JSON.stringify(text)],
      };

      setTasks([...tasks, newTask]);
      // dispatch(updateData(newTask));

      setText("");
    }
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="flex flex-col mt-10">
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="flex flex-col gap-5">
          <div className="flex self-center">
            <DatePicker
              value={values}
              onChange={setValues}
              range
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
          {/* <p>{values.map(data=><div className="flex gap-2"><p>{data.year}</p><p>{data.month.name}</p><p>{data.day}</p></div>)}</p> */}
          <div className="todo-list flex gap-5">
            <button className="btn" onClick={() => addTask(text)}>
              ثبت ایونت
            </button>
            <input
              className="p-2"
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            {tasks.map((task) => (
              <>
                <TodoItem
                  key={task.id}
                  task={task}
                  values={values}
                  deleteTask={deleteTask}
                  toggleCompleted={toggleCompleted}
                />
              </>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
