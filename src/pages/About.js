import { React, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import sandycloud from '../assets/img/sandycloud.jpeg'
import teacup from '../assets/img/teacup.jpeg'
import herobanner from '../assets/img/herobanner.jpg'

export default function About() {
  const [data, setData] = useState({})

  axios
    .get('https://raw.githubusercontent.com/yigdo/yigdo/main/portfolio.json')
    .then(function (res) {
      setData(res.data)
    })

  return (
    <>
      <Navbar activision="About"/>
      <div id="SliderMain" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#SliderMain"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#SliderMain"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#SliderMain"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sandycloud}
              className="d-block w-100"
              alt="..."
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={teacup}
              className="d-block w-100"
              alt="..."
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={herobanner}
              className="d-block w-100"
              alt="..."
              height="400px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#SliderMain"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#SliderMain"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
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
      </div>
      <Footer />
    </>
  )
}
