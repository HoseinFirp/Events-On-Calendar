import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import EventForm from './EventForm';

const MyCalendar = () => {
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
    
      <div className="max-w-3xl mx-auto mt-60 p-4 bg-slate-800 rounded shadow-lg">
        
        <div className="bg-slate-700 p-4 rounded">
          <Calendar
            onChange={handleDateChange}
            value={date}
            onClickDay={handleEventClick}
            events={events} // Pass your events data to the Calendar component
            className="border p-2"
          />
        </div>  
        <Link path="/create-event">
          <EventForm date={date} onCreateEvent={handleCreateEvent} />
        </Link>
        {/* <Link to="/create-event" className="block mt-4 text-blue-500">
          Create Event
        </Link> */}
      </div>
    
  );
};

export default MyCalendar;