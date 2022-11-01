import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default Counter;

/**
 * useState adalah hook yang digunakan untuk mengatur state pada functional component
 * useState akan mengembalikan array yang berisi 2 nilai, yaitu nilai state dan fungsi untuk mengubah nilai state
 * pada contoh di atas, nilai state bernama count dan fungsi untuk mengubah nilai state bernama setCount
 * fungsi setCount akan mengubah nilai state count menjadi nilai yang diberikan pada parameter fungsi tersebut
 * pada contoh di atas, pada onClick decrement dan increment akan merubah nilai state counter (dikurangi atau ditambahkan dan method/fungsi setCount akan mengubah nilai state count menjadi nilai yang diberikan pada parameter fungsi tersebut.
 */
