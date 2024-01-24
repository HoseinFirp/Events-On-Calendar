import axios from 'axios';
import React, { useState } from 'react';
import { useUser } from '../user/userSlice';

const EventForm = ({ date, onCreateEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
//   const [date, setDate] = useState(new Date());

const user = useUser()

  const handleCreateEvent = async () => {
    try {
      const response = await axios.post(
        "https://appback.liara.run/user/createList",
        {
          text: `${description}`,
          date: `${date}`,
          titel: `${title}`,
        },
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      console.log(response);
      setTitle('')
      setDescription('')
      alert(`${response.data.message}`)
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

    // onCreateEvent(newEvent);
    
    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-slate-700 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">ثبت گزارش</h2><div>{`${date}`}</div>
      <div className="mb-4">
        <label className="block text-sm font-medium pt-5 pb-2 text-gray-400">سر تیتر</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium  pt-2 pb-2 text-gray-400">متن</label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleCreateEvent}
        >
        ثبت گزارش
      </button>
    </div>
  );
};


export default EventForm;