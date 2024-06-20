import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count mounted", count);

    return () => {
      console.log("count unmounted", count);
    };
  }, []);

  useEffect(() => {
    console.log("count updated" ,count);
  }, [count]);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div className="counter">
      <h1>my first counter <sub><i>Increment</i></sub> and <sup><i>Decrement</i></sup></h1>
        <h1>{count}</h1>
        <div className="">
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;