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
          <div className="credits">
            &copy; <span id="year">{year}</span> Dansol High School. All rights
            reserved.
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <FaInstagram size={35}/>
            </li>
            <li>
            <FaFacebookSquare size={35}/>
            </li>
            <li>
              <TbWorldWww size={35}/>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
