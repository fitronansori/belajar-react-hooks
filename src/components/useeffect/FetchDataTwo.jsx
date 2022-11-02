import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchDataTwo = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

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
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{data.title}</div>
    </div>
  );
};

export default FetchDataTwo;

// Fetch Data Berdasarkan ID

/**
 * 1. In line 3 we import the useState hook from react.
 * 2. In line 4 we import the useEffect hook from react.
 * 3. In line 5 we import axios from axios.
 * 4. In line 7 we create a function component FetchDataTwo.
 * 5. In line 8 we declare a variable data which is set to an empty object using useState hook.
 * 6. In line 9 we declare a variable id which is set to 1 using useState hook.
 * 7. In line 11 we use useEffect hook to fetch the data from the API and then set the data to the variable data using setData.
 * 8. In line 12 we use axios to fetch the data from the API.
 * 9. In line 13 we use get method to fetch the data from the API.
 * 10. In line 14 we pass the URL of the API endpoint in the get method.
 * 11. In line 15 we use the then method to log the data we get from the API.
 * 12. In line 16 we set the data we get from the API to the variable data using setData.
 * 13. In line 17 we use the catch method to log the error.
 * 14. In line 19 we return the data we get from the API using the data variable.
 * 15. In line 20 we declare a div element.
 * 16. In line 21 we declare an input element.
 * 17. In line 22 we pass the value of the variable id to the input element.
 * 18. In line 23 we pass the onChange attribute to the input element.
 * 19. In line 24 we set the value of the id variable to the target value of the event.
 * 20. In line 25 we declare a div element.
 * 21. In line 26 we pass the value of the variable data to the div element.
 * 22. In line 27 we export the FetchDataTwo function component.
 * 23. In line 28 we end the function component.
 */
