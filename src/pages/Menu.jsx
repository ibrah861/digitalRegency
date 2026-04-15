import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { navigationState } from "../util/Context";

const Menu = () => {
  const { menu } = useContext(navigationState);
  return (
    <>
      {menu && (
        <div className="menu-nav">
          <p>Navigation</p>
          <ul>
            <Link to="/auth-signin">
              <li>Login</li>
            </Link>

            <Link to="/auth-signup">
              <li>Sign up</li>
            </Link>

            <li>Logout</li>
            <Link to="/create">
              <li>Create</li>
            </Link>
            <Link to="/update">
              <li>Update</li>
            </Link>
            <Link to="/view">
              <li>View</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
