import React from "react";

const Login = () => {
  return (
    <div className="overlay">
      <div className="header">
        <h1 className="heading">Log In</h1>
      </div>
      <div className="Login-field">
        <form>
            <label htmlFor="">School ID</label>
            <input type="text" placeholder="Input ID here" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Input Password here" />
        </form>
      </div>
    </div>
  );
};

export default Login;
