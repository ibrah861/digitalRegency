import React from "react";
import { useContext } from "react";
import { navigationState } from "../util/Context";

const Menu = () => {
  const { menu } = useContext(navigationState);
  return (
    <>
      {menu && (
        <div className="menu-nav">
          <p>Navigation</p>
          <ul>
            <li>Login</li>
            <li>Signin</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
