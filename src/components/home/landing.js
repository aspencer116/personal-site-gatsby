// eslint-disable-next-line no-unused-vars
import React from "react"

import { Link } from "gatsby"

const ArrowIcon = () => (
  <svg className="c-landing__arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none">
    <path stroke="currentColor" stroke-width="1.5" d="M0 2.05h38.95m0 0V41m0-38.95-36.9 36.9" opacity=".8" />
  </svg>
)

const Landing = () => (
  <section className="c-landing">
    <h1 className="c-landing__hero t-editorial">
      Hey, I'm Andrew Spencer, a&nbsp;creative from New England
    </h1>

    <div className="c-landing__cards">
      <Link to="/designer" className="c-landing__card">
        <div className="c-landing__card-header">
          <h2 className="c-landing__card-title">Designer</h2>
          <ArrowIcon />
        </div>
        <p className="c-landing__card-description">
          As a designer who codes, I helping teams deliver successful, beautiful, and engaging digital products.
        </p>
        <p className="c-landing__card-detail">
          Currently Principal Product Designer <a href="https://thoughtbot.com" className="c-landing__link">@thoughtbot</a>
        </p>
      </Link>

      <Link to="/photographer" className="c-landing__card">
        <div className="c-landing__card-header">
          <h2 className="c-landing__card-title">Photographer</h2>
          <ArrowIcon />
        </div>
        <p className="c-landing__card-description">
          I work with small businesses to capture places, landscapes, and things that inspire.
        </p>
        <p className="c-landing__card-detail">
          <span className="c-landing__status-dot"></span>
          Taking on select photography work
        </p>
      </Link>
    </div>
  </section>
)

export default Landing
