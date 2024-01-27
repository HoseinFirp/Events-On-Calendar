import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Example({ date }) {
  const [value, setValue] = useState(date);

  return (
    <>
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
      <div className="flex gap-16">
        <p>{value?.toDate?.().toString().slice(0, 15)}</p>
        <div className="flex gap-1">
          <p>{value?.year}</p>
          <p>{value?.month?.name}</p>
          <p>{value?.day}</p>
          <p>{value?.weekDay?.name}</p>
        </div>
      </div>
    </>
  );
}
