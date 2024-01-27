import axios from "axios";
import React, { useState } from "react";
import { useUser } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../Tools/Loader";
import Warning from "../Tools/Warning";
import OkText from "../Tools/OkText";

const EventForm = ({ date }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [OkText1,setOkText1] = useState(false)

  const navigate = useNavigate();

  const user = useUser();
  const handleCreateEvent = async () => {
    setLoading(true);
    setWarning(false)
    setOkText1(false)

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
      setOkText1(true)

      setTitle("");
      setDescription("");
      // alert(`${response.data.message}`);
      setLoading(false);
      navigate("/profile/report");
    } catch (error) {
      setWarning(true);
      console.error("Error fetching events:", error);
      setLoading(false);

    }
  };

  // onCreateEvent(newEvent);

  return (<>{warning?
    <Warning
      children={"مشکلی بوجود آمده... دوباره تلاش کنید"}
    />
  :OkText1?<OkText children={"گزارش اضافه شد"}/>:null
}
    <div className="max-w-2xl w-96 mx-auto mt-8 p-4 bg-slate-700 rounded shadow-lg">
      <h2 className="text-2xl flex justify-center font-bold mb-4">ثبت گزارش</h2>
      <div className="mb-4">
        <label className=" text-sm font-medium flex justify-end pt-5 pb-2 text-gray-400">
          سر تیتر
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className=" text-sm font-medium flex justify-end  pt-2 pb-2 text-gray-400">
          متن
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>
      {loading ? (
        <Loader />
        ) : (
          <button
          disabled={!title || !description || !date}
          className="btn bg-blue-500  text-white border-none px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCreateEvent}
          >
          ثبت گزارش
        </button>
      )}
    </div>
          </>
  );
};

export default EventForm;
