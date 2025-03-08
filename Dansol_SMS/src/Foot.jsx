import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
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
              <Link to={"https://www.instagram.com/"}>
                <FaInstagram size={35} color="#f0f0f0" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com/"}>
                <FaFacebookSquare size={35} color="#f0f0f0" />
              </Link>
            </li>
            <li>
              <Link to={"https://dansolschools.com"}>
                <TbWorldWww size={35} color="#f0f0f0" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
