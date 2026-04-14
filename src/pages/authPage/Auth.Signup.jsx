import React from "react";
import { Link } from "react-router-dom";

const AuthSignup = () => {
  return (
    <>
      <div className="signup">
        <h1>Welcome to Digital world</h1>
        <p>
          Kindly use bellow input field to signup by entering your email address
        </p>
        <form>
          <div className="inputfield">
            <label htmlFor="name">Email address</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
            />
          </div>

          <Link>
            <p className="logMobile">Login with mobile </p>
          </Link>

          <div className="inputfield">
            <button>Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthSignup;
