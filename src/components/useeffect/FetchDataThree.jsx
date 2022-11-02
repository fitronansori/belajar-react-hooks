import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchDataThree = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  const [idBtn, setIdBtn] = useState(1);

  const handleId = () => {
    setIdBtn(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idBtn]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleId}>
        Fetch Post
      </button>
      <div>{data.title}</div>
    </div>
  );
};

export default FetchDataThree;

// Fetch Data Berdasarkan ID dengan button click

/**
 * 1. In this example, we are using the useEffect() hook. We are calling the useEffect() hook after the button click event.
2. We are calling the useEffect() hook which takes two arguments. The first argument is a callback function and the second argument is the dependency array.
3. The callback function is the function that we want to execute after the button click event.
4. The dependency array is the array that contains the values that we want to track. If any of the values in the dependency array changes, then the useEffect() hook will be called again.
5. In this example, we are passing the idBtn state variable in the dependency array because we want to call the useEffect() hook whenever the idBtn state variable changes.
6. To change the idBtn state variable, we are calling the setIdBtn() function after the button click event.
7. The setIdBtn() function takes an argument which is the id state variable. So, we are passing the id state variable in the setIdBtn() function.
8. At the end of the useEffect() hook, we are passing the idBtn state variable in the dependency array. So, if the idBtn state variable changes, then the useEffect() hook will be called again.
 */
