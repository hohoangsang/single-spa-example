import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/page1" className="link">
          Page 1
        </Link>
        <Link to="/page2" className="link">
          Page 2
        </Link>
        <Link to="/page3" className="link">
          Page migrated from CRA
        </Link>
      </nav>

      <p className="logout" onClick={handleLogOut}>
        Log out
      </p>
    </header>
  );
}
