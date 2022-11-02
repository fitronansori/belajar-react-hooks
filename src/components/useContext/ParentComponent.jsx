import React from "react";
import ComponentA from "./ComponentA";

export const userContext = React.createContext();
export const languageContext = React.createContext();

const ParentComponent = () => {
  return (
    <div>
      <userContext.Provider value={"Fitron Ansori"}>
        <languageContext.Provider value={"JavaScript"}>
          <ComponentA />
        </languageContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default ParentComponent;

// jelaskan tentang useContext

/**
 * 1. useContext adalah sebuah hook yang digunakan untuk mengakses context yang telah dibuat
 * 2. useContext menerima sebuah parameter yaitu context yang telah dibuat
 * 3. useContext akan mengembalikan nilai dari context yang telah dibuat
 */

/**
 * explanation for the code above:
1. We create a ParentComponent and we import ComponentC from "./ComponentC".
2. We create a React Context object with the help of React.createContext() method.
3. Our ParentComponent component returns a JSX element that wraps our ComponentC component with userContext.Provider and channelContext.Provider components.
4. We pass a value for userContext and channelContext, respectively.
5. The value for userContext is "Rizki" and the value for channelContext is "Rizki Channel".
6. The userContext.Provider and channelContext.Provider components are used to provide a value to all the children components.
7. The value can be accessed by the children components using the useContext hook.
8. The useContext hook is used to access the value of a React Context object.
9. The useContext hook is used inside the functional component.
10. The useContext hook takes the React Context object as a parameter and returns the current context value.
11. The useContext hook is used inside the functional component.
12. The useContext hook takes the React Context object as a parameter and returns the current context value. 
 */
