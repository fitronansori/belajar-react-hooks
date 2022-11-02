import React from "react";
import { userContext, languageContext } from "./ParentComponent";
const ComponentC = () => {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <languageContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
            </languageContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentC;

// Cara Kedua menggunakan useContext
/**
 * explanation for the code above:
1. We have imported React, userContext and languageContext from the ParentComponent.js file.
2. We have created a functional component named ComponentC.
3. In the ComponentC, we have used the userContext.Consumer and languageContext.Consumer to consume the values provided by the ParentComponent.js file.
4. We have wrapped the JSX code inside the userContext.Consumer and languageContext.Consumer.
5. We have passed the user and channel as the props to the JSX code.
6. We have returned the JSX code.
7. We have exported the ComponentC.
 */
