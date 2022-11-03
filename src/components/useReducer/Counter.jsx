import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : initialState;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;

// jelaskan tentag useReducer

/**
 * useReducer adalah hook yang digunakan untuk mengelola state yang kompleks
 * useReducer mirip dengan useState, namun useReducer memiliki kelebihan
 * yaitu dapat mengelola state yang kompleks
 * useReducer menerima dua parameter, yaitu reducer dan initialState
 * reducer adalah function yang menerima dua parameter, yaitu state dan action
 * initialState adalah nilai awal state
 */

/**
 * explanation for the code above:
1. The first argument to the useReducer hook is the reducer function. 
2. The second argument is the initial state of the component. 
3. The useReducer hook returns an array with two elements. 
4. The first element is the current state. 
5. The second element is the dispatch function. 
6. The dispatch function is used to dispatch actions to the reducer function. 
7. The reducer function is responsible for updating the state based on the action dispatched. 
8. The dispatch function takes the action as an argument. 
9. The action is then passed to the reducer function. 
10. The reducer function is responsible for updating the state based on the action passed. 
11. The hook is then re-rendered with the updated state. 
12. The updated state is then passed to the component via the count variable.
 */
