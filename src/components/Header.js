import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const handleLogout = () => {
    // dispatch(userLogout());
    // navigate("/login");
  };
  return (
    <header className="kn-global-header">
      <Link to={"/"}>
        <h1 className="kn-global-header-logo">Kunngy</h1>
      </Link>
      <button onClick={handleLogout} className="btn-primary knghol-logout">
        Log Out
      </button>
    </header>
  );
};

export default Header;
