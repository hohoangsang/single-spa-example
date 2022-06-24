import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "./Common/Navigate";
import Navbar from "./components/navbar/Navbar";

export default function Main() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}
