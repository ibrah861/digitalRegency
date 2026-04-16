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
      <div className="main">
        <div>
          <h1>Welcome to Digital world</h1>
          <p>
            Kindly use bellow input field to signup by entering your details
          </p>
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

            <p className="signin-p">
              I have Account Already &nbsp;
              <Link>
                <span>Login</span>
              </Link>
              &nbsp;
            </p>

            <div className="inputfield">
              <button onClick={handleSignup}>
                {true ? "Creating Account ..." : "Sign up"}
              </button>
            </div>
          </form>

          {signin && <Loader />}

          <p className="or-p">_______ OR _______ </p>

          <p>
            I need some help please &nbsp;<Link>Contact us</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthSignup;
