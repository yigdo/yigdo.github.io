import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


import Navbar from "../components/Navbar";
import Main from "../components/Main"

export default function Home() {
  return (
    <div>
      <Navbar activision="Home" />
      <div className="main">
        <h3>Yigit Gulay</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae sapiente et laboriosam ullam sit, illo assumenda at enim velit.</p>
      </div>
    </div>
  );
}
