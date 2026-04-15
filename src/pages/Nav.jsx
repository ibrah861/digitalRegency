import { useContext, React } from "react";
import { navigationState } from "../util/Context";
import { Link } from "react-router-dom";

// assets
import image1 from "../assets/water.svg";

const Navigation = () => {
  const { setMenu, menu } = useContext(navigationState);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="nav">
      <div className="main">
        <nav>
          <ul>
            <Link to="/auth-signin">
              <li>Login</li>
            </Link>

            <li>Logout</li>
            <Link to="/auth-signup">
              <li>Signup</li>
            </Link>
          </ul>
          <div className="menu" onClick={handleMenu}>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <Link to="/">
            <img src={image1} alt="water" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
