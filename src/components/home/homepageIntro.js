// eslint-disable-next-line no-unused-vars
import React from "react"

import { Link } from "gatsby"

const ArrowIcon = () => (
  <svg className="c-landing__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const HomepageIntro = () => (
  <section className="c-landing">
    <div className="c-landing__hero">
      <h1 className="t-editorial">
        Hey, I'm Andrew Spencer,
        <br />a creative from New England
      </h1>
    </div>

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

export default HomepageIntro
