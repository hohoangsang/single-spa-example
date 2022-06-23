import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function Main() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login", { replace: true });
  }, [token, navigate]);

  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}
