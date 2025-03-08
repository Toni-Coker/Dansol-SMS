import React from "react";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Dansol App</h1>
      </div>
      <div className="Login">
        <div className="primary-buttons">
          <button>Log in as Student</button>
          <button>Log in as Parent</button>
          <button>Log in as Teacher</button>
          <button>Log in as Acountant</button>
        </div>
        <div className="secondary-button">
          <button>Log in as Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
