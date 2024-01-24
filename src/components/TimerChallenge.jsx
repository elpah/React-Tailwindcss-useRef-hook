import React, { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [displayTargetTime, setDisplayTargetTime] = useState(targetTime);

  const timer = useRef();

  function handleStart() {
    setTimerStarted(true);

    let currentTargetTime = targetTime;

    const updateTimer = () => {
      currentTargetTime -= 1;
      setDisplayTargetTime(currentTargetTime);

      if (currentTargetTime === 0) {
        setTimerExpired(true);
      } else {
        timer.current = setTimeout(updateTimer, 1000);
      }
    };

    updateTimer();
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setDisplayTargetTime(targetTime);
    setTimerExpired(false);
  }

  return (
    <section className="bg-gray-100 p-6 rounded-md shadow-md w-450">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {timerExpired && <p>you lost</p>}
      <p className="text-gray-600">
        {displayTargetTime} second{displayTargetTime !== 1 && "s"}
      </p>
      <button
        onClick={timerStarted ? handleStop : handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        {timerStarted ? "stop" : "start"}
      </button>
      <p className="text-gray-500 mt-4">
        {timerStarted ? "Timer is Running" : "Timer Inactive"}
      </p>
    </section>
  );
}
