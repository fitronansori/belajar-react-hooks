import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const FetchingData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {/* tampilkan semua data */}
      {state.loading ? (
        "Loading"
      ) : state.error ? (
        state.error
      ) : (
        <div>
          <h1>{state.post.title}</h1>
          <p>{state.post.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchingData;

/**
 * 1. Jika state.loading bernilai true, maka akan menampilkan "Loading"
`* 2. Jika state.error bernilai true, maka akan menampilkan state.error
 * 3. Jika kedua kondisi diatas tidak terpenuhi, maka akan menampilkan data 
 * 4. Data yang ditampilkan adalah title dan body
 */
