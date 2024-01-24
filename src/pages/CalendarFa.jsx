import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Example() {
  const [value, setValue] = useState();

  return (
    <>
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
      <p>{value?.toDate?.().toString()}</p>
    </>
  );
}
