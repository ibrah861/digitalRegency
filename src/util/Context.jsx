// dependences
import { createContext, useState } from "react";

export const navigationState = createContext(null);

export const NavigationContext = ({ children }) => {
  //   states
  const [menu, setMenu] = useState(false);
  return (
    <>
      <navigationState.Provider value={{ menu, setMenu }}>
        {children}
      </navigationState.Provider>
      ;
    </>
  );
};
