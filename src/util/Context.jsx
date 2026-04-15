// dependences
import { createContext, useState } from "react";

export const navigationState = createContext(null);

export const NavigationContext = ({ children }) => {
  //   states
  const [menu, setMenu] = useState(false);
  const [postName, setPostName] = useState(false);
  return (
    <>
      <navigationState.Provider
        value={{ menu, setMenu, postName, setPostName }}
      >
        {children}
      </navigationState.Provider>
    </>
  );
};
