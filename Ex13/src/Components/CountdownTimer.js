import React, { useState, useEffect } from "react";

function CountdownTimer({ initialValue = 10 }) {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    setTime(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (time <= 0) return;
    const timerId = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);

  return (
    <div>
      <h3>Time Remaining: {time}</h3>
    </div>
  );
}

export default CountdownTimer;
