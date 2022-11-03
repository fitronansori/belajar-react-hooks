import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);
  return (
    console.log(timer),
    (
      <div>
        <h1>Timer - {timer}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Timer
        </button>
      </div>
    )
  );
};

export default Timer;
