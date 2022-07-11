import React, { useState } from "react";
import "./NavigationBar.sass";
import { FaFilter, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  const [menu, setMenu] = useState(true);
  const of = () => {
    setMenu(true);
  };
  return (
    <div className="Navbar">
      <div className="Header">
        <div className="logo">
          <p>Digi-Papyrus</p>
        </div>
        <div className="options">
          <Link to="/">
            <FaHome size={28} />
          </Link>
          <p>
            <p>Digi-Papyrus</p>
          </p>
          <p>
            <p>Digi-Chats</p>
          </p>

          <div className="browse">
            <input type="text" placeholder="Browse..." />
            <FaFilter />
          </div>
          <p>
            <Link to="/login">Login | Signup</Link>
          </p>
          <div
            className="burger"
            onClick={() => {
              if (menu) {
                setMenu(false);
              } else {
                setMenu(true);
              }
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className={menu ? "Menu" : "MenuActive Menu"}>
        <div
          style={{ display: `${menu ? "none" : "flex"}` }}
          className="menuOptions"
        >
          <h1>Digi-Papyrus</h1>
          <p onClick={of}>
            <p>Publish Digi-Papyrus</p>
          </p>
          <p onClick={of}>
            <Link to="/chatInput">Publish Digi-Chats</Link>
          </p>
          <p onClick={of}>
            <Link to="/about">About Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
