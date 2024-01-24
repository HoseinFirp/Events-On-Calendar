import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Example() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);
  
  
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get('YOUR_BACKEND_API_URL');
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   };
  
    const handleDateChange = (newDate) => {
      setDate(newDate);
    };
  
    const handleEventClick = (event) => {
      // Handle event click, e.g., show details, edit, delete
      console.log('Clicked event:', event);
    };
  
    const handleCreateEvent = (newEvent) => {
      // Handle creating a new event, e.g., send data to the backend
      console.log('New Event:', newEvent);
      // Update your backend and fetch events again
      // fetchEvents();
    };
  
  //   useEffect(() => {
  //     fetchEvents();
  //   }, []); // Fetch events on component mount
  
  return (
    <Calendar
      calendar={persian}
      locale={persian_fa}
      onChange={handleDateChange}
      value={date}
      onClickDay={handleEventClick}
      events={events}
    />
  );
}
