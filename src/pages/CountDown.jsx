import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../user/userSlice";

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const dispatch = useDispatch();
  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes} : ${seconds}`;
  };

  useEffect(() => {
    if (!seconds) {
      dispatch(updateToken(""));
    }
  }, [seconds]);

  return (
    <div>
      <p className="text-3xl bg-slate-800 p-3 rounded-md">{formatTime(seconds)}</p>
    </div>
  );
};

export default CountdownTimer;
