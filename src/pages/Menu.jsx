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
            <Link>
              <li>Login</li>
            </Link>

            <Link to="/auth-signup">
              <li>Sign up</li>
            </Link>

            <li>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
