import React, { useState } from "react";
import { Link } from "react-router-dom";

// pages
import Loader from "../../util/Loader";

const AuthSignup = () => {
  const [signin, setSignin] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    setSignin(true);

    const close = () => {
      setSignin(false);
    };
    setTimeout(close, 7000);
  };
  return (
    <>
      <div className="signup">
        <h1>Welcome to Digital world</h1>
        <p>Kindly use bellow input field to signup by entering your details</p>
        <form>
          <div className="inputfield">
            <label htmlFor="name">User name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="name">Email address</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="name">Create Strong Password</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
            />
          </div>

          <Link>
            <p className="logMobile">Login</p>
          </Link>

          <div className="inputfield">
            <button onClick={handleSignup}>
              {true ? "Creating Account ..." : "Sign up"}
            </button>
          </div>
        </form>

        {signin && <Loader />}
      </div>
    </>
  );
};

export default AuthSignup;
