import React from "react";
import "../assets/css/style.css";
import yigit from "../assets/img/yigit.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function Navbar(props) {
  var activision = props.activision;
  var homeclass = "nav-link";
  var projectsclass = "nav-link";
  var galleryclass = "nav-link";
  var aboutclass = "nav-link";

  if (activision == "Home") {
       homeclass = "nav-link active";
  } else if (activision == "Projects") {
       projectsclass = "nav-link active";
  } else if (activision == "Gallery") {
       galleryclass = "nav-link active";
  } else if (activision == "About") {
       aboutclass = "nav-link active";
  }

  return (
    <div>
      <header>
        <div className="banner">
          <img className="banner-img" src={yigit} alt="" />
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white border-menu ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-auto ">
                <a class={homeclass} aria-current="page" href="/" id="homelink">
                  Home
                </a>
                <a class={projectsclass} href="/projects" id="projectslink">
                  Projects
                </a>
                <a class={galleryclass} href="/gallery" id="gallerylink">
                  Gallery
                </a>
                <a class={aboutclass} href="/about" id="aboutlink">
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
