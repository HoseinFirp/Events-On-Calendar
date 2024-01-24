import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

export default function Example() {
  const [values, setValues] = useState([
    new DateObject({ calendar: persian, locale: persian_fa }), //امروز
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "day"), //فردا
  ]);

  return (
    <DatePicker
      multiple
      value={values}
      onChange={setValues}
      calendar={persian}
      locale={persian_fa}
     
    />
  );
}
