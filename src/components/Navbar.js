import React from "react";
import "../assets/css/style.css";
import yigit from "../assets/img/yigit.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function Navbar(props) {
  var activision = props.activision;
  var homeclassName = "nav-link";
  var projectsclassName = "nav-link";
  var aboutclassName = "nav-link";
  var isBorderclassName = props.border;


  if (activision == "Home") {
       homeclassName = "nav-link active";
  } else if (activision == "Projects") {
       projectsclassName = "nav-link active";
  } else if (activision == "About") {
       aboutclassName = "nav-link active";
  }

  return (
    <div>
      <header>
        <div className="banner">
          <img className="banner-img" src={yigit} alt="" />
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto ">
                <a className={homeclassName} aria-current="page" href="/" id="homelink">
                  Home
                </a>
                {/* <a className={projectsclassName} href="/projects" id="projectslink">
                  Projects
                </a> */}
                <a className={aboutclassName} href="/about" id="aboutlink">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
