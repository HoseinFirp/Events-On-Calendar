import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { updateData, useUser } from "../user/userSlice";

export default function Example() {
  const [values, setValues] = useState([
    new DateObject({ calendar: persian, locale: persian_fa }), //امروز
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "day"), //فردا
  ]);
const user =useUser()
// console.log(user.data.text);

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  
  const dispatch = useDispatch()
  function addTask(text) {
    if (text) {
      
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
        values:[JSON.stringify(text)],
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
  // console.log(values.map(data=><div>{data.day}</div>))
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col gap-5">
        <p className="flex self-center">
          <DatePicker
            value={values}
            onChange={setValues}
            range
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </p>
        {/* <p>{values.map(data=><div className="flex gap-2"><p>{data.year}</p><p>{data.month.name}</p><p>{data.day}</p></div>)}</p> */}
        <div className="todo-list flex gap-5">
          <button className="btn" onClick={() => addTask(text)}>
            ثبت ایونت
          </button>
          <input
            className="p-2"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <p>
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
        </p>
      </div>
    </div>
  );
}
