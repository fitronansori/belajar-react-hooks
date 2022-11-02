import React, { useContext } from "react";
// import ComponentC from "./ComponentC";
import { userContext, languageContext } from "./ParentComponent";
const ComponentB = () => {
  const user = useContext(userContext);
  const language = useContext(languageContext);

  return (
    <div>
      {user} - {language}
    </div>
  );
};

export default ComponentB;

// Cara Pertama menggunakan useContext

/**
 * 1. First we import useContext from react.
2. Then we import the userContext and languageContext which we have created in ParentComponent.
3. Then we have created a functional component ComponentB.
4. Inside the functional component we have called the useContext hook twice and passed the context values
   which we want to use in this component.
5. Then we have returned a div with the user and language values.
6. We have also passed the ComponentC component in the Parent Component below the ComponentB component.
 */
