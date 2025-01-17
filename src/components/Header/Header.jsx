import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav>
      <h1>BiteMap</h1>
      <div className="search-bar">
        <input type="text" placeholder="feeling hungry?" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <button>Log In </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
