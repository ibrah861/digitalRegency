import React from "react";

const AuthSignup = () => {
  return (
    <>
      <div className="signup">
        <h1>Sign up</h1>
        <form>
          <div className="inputfield">
            <label htmlFor="name">Email address</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
            />
          </div>

          <div className="inputfield">
            <button>Signup</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthSignup;
