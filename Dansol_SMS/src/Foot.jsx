import React from "react";
import "./Foot.css";
const Foot = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="copyright">
          <p>
            &copy; <span id="year">{year}</span> Dansol High School. All rights
            reserved.
          </p>
        </div>
        <div className="social">
            
        </div>
      </footer>
    </div>
  );
};

export default Foot;
