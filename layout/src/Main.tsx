import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function Main() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) navigate("/login", { replace: true });

  return <div>{token && <Navbar />}</div>;
}
