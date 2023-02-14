import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import axios, { Axios } from 'axios'
import { useState } from 'react'

import cs from "../assets/img/cs.png";
import fox from "../assets/img/fox.jpeg";
import minecraft from "../assets/img/minecraft.jpeg";
import vscode from "../assets/img/vscode.jpeg";

export default function Home() {
  const [data, setData] = useState({})

  axios
    .get('https://raw.githubusercontent.com/yigdo/yigdo/main/portfolio.json')
    .then(function (res) {
      setData(res.data)
    })

  return (
    <div>
      <Navbar activision="Home" />

      <div className="p-5 text-center bg-image  hero-main">
        <div className="mask mask-main">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Yiğit Gülay</h1>
              <h6 className="mb-3">
                A {data.age} Years Old Software Developer
              </h6>
              <a
                className="btn btn-outline-light btn-lg"
                href="/#/About"
                role="button"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="about-me">
          <h3>Who am I?</h3>
          <p>
            I am Yiğit, a {data.age} years old software developer from Turkey. I
            have started coding when I was 6. I used to write{' '}
            <a
              href="https://smallbasic.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Small Basic
            </a>{' '}
            back then. It made me learn the fundamentals like varibles and
            operators. Then I slowly progressed into web design. I made lots and
            lots of static html & css & js websites. I wanted to use
            authentication so I tried Firebase. It was somehow overwhelming for
            me. I discovered something called php after trying Firebase. It was
            like magic! I learned simple concepts and begged my mom to find a
            code mentor. I was 8-9 then. Many teachers declined me and said: "I
            am not a baby sitter maam" It broke my heart. One person however ({' '}
            <a
              href="https://github.com/RamenChan"
              target="_blank"
              rel="noopener noreferrer"
            >
              RamenChan
            </a>{' '}
            ) made me learn php, laravel, mysql and more. I owe him many of my
            skills nowadays. I also introduced him to nodejs libraries like
            react and vue. He owes me those skills. Then, just about everything
            was great he abbandoned me. I had to survive myself. I created
            projects using laravel and created my own mvc library. Then me and
            my family searched for people who can share me their knowledge. I
            was looking for php mentors but I somehow started a c# course. Now I
            am here, writing my portfolio on react.{' '}
          </p>
        </div>
        <div className="facts">
          <h3>Facts about me</h3>
          <div className="card-group" style={{ height: '250px' }}>
            <div className="card" style={{ width: '250px' }}>
              <img
                src="https://yt3.googleusercontent.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s176-c-k-c0x00ffffff-no-rj"
                className="card-img-top"
                alt="Fireship Youtube"
                height="250px"
              />
              <div className="card-body">
                <p className="card-text">
                  Favorite YT:{' '}
                  <a
                    href="https://www.youtube.com/c/fireship"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase
                  </a>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: '250px' }}>
              <img
                src={minecraft}
                className="card-img-top"
                alt="Minecraft"
                height="250px"
              />
              <div className="card-body">
                <p className="card-text">
                  Favorite Game:{' '}
                  <a
                    href="https://minecraft.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minecraft
                  </a>
                </p>
              </div>
            </div>

            <div className="card" style={{ width: '250px' }}>
              <img
                src={cs}
                className="card-img-top"
                alt="c#"
                height="250px"
              />
              <div className="card-body">
                <p className="card-text">
                  Favorite Lang:{' '}
                  <a
                    href="https://microsoft.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C#
                  </a>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: '250px' }}>
              <img
                src={vscode}
                className="card-img-top"

                height="250px"
                alt="Vscode"
              />
              <div className="card-body">
                <p className="card-text">
                  Favorite Tool:{' '}
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visual Studio Code
                  </a>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: '250px' }}>
              <img
                src={fox}
                className="card-img-top"
                height="250px"
                alt="Fox"
              />
              <div className="card-body">
                <p className="card-text">
                  Favorite Animal: Fox
                    
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
