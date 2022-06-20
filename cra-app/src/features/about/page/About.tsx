import React from "react";
import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/page2", { replace: true });
  };

  return (
    <div className="container">
      <h1>About page</h1>
      <p
        onClick={() => handleNavigate()}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Click to navigate to Page 2
      </p>
    </div>
  );
}

export default About;
