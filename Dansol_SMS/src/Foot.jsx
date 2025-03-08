import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
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
          <ul>
            <li>
              <FaInstagram size={50} color="#f0f0f0" />
            </li>
            <li>
            <FaFacebookSquare size={50} color="#f0f0f0" />
            </li>
            <li>
              <TbWorldWww size={50} color="#f0f0f0" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
