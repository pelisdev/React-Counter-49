import React, { useState, useEffect } from "react";
import InputDigitCard from "./Input";

const SimpleCounter = () => {
  const [counter, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (

    <div className="container-fluid">
      <InputDigitCard
        Watcher
        digitSix={Math.floor(counter / 100000) % 10}
        digitFive={Math.floor(counter / 10000) % 10}
        digitFour={Math.floor(counter / 1000) % 10}
        digitThree={Math.floor(counter / 100) % 10}
        digitTwo={Math.floor(counter / 10) % 10}
        digitOne={Math.floor(counter % 10)}
      />
    </div>
  );
};

export default SimpleCounter;