import React from "react"
import {CSSTransition} from 'react-transition-group'
import HomepageHeroImages from "./homepageHeroImages"

const HomepageHero = () => {
  return (
    <section className="c-homepage-hero">
      <CSSTransition
        in={true}
        timeout={3000}
        classNames="transition-homepage-hero__heading"
        appear
      >
        <h1 className="t-title c-homepage-hero__heading" aria-label="Product Designer">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>d</span>
          <span>u</span>
          <span>c</span>
          <span>t</span>
          <span className="with-space"></span>
          <span>D</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
        </h1>
      </CSSTransition>
      <div className="c-homepage-hero__primary">

        <CSSTransition
          in={true}
          timeout={5000}
          classNames="transition-homepage-hero__text"
          appear
        >
          <div className="c-homepage-hero__text-container">
            <p className="c-homepage-hero__intro">Helping teams deliver successful, beautiful, and engaging digital&nbsp;products.</p>
            <div className="o-relative c-homepage-hero__detail-container">
              <svg className="c-homepage-hero__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clip-path="url(#a)"><path stroke="currentColor" stroke-width="1.5" d="M12.344 2.738h6.906v9.5H6.39v-9.5h5.954Z"/><path stroke="currentColor" stroke-width="1.5" d="m19.648 12.271-4.74 4.741H2.066l4.846-4.893"/><path fill="currentColor" d="M13.014 5.013h4v4h-4z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
              <span className="t-meta t-meta--small c-homepage-hero__detail">Senior Product Designer @<a href="https://thoughtbot.com">thoughtbot</a></span>
            </div>
            <div className="o-relative c-homepage-hero__detail-container">
              <svg className="c-homepage-hero__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M10 3.75h9.25v13.5H.75V12"/><path fill="currentColor" d="m1.582 9.997 4-7.966 4 7.966h-8ZM4.582 9.997h2v2h-2z"/></svg>
              <span className="t-meta t-meta--small c-homepage-hero__detail">New Englander</span>
            </div>
            <div className="o-relative c-homepage-hero__detail-container">
              <svg className="c-homepage-hero__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M1.276 10.02h17.448M10.059 0v20"/><path stroke="currentColor" stroke-width="1.6" d="m3.504 3.458 13.077 13.077M3.381 16.469 16.458 3.392"/><rect width="5.898" height="5.898" x="7.051" y="7.051" fill="currentColor" rx="2.949"/></svg>
              <span className="t-meta t-meta--small c-homepage-hero__detail">Design generalist, product specialist</span>
              <ul className="o-delistelement c-homepage-hero__list">
                <li className="o-delist t-meta t-meta--small">UI/UX Design</li>
                <li className="o-delist t-meta t-meta--small">Design Ops</li>
                <li className="o-delist t-meta t-meta--small">Design Systems</li>
                <li className="o-delist t-meta t-meta--small">Web Design</li>
                <li className="o-delist t-meta t-meta--small">Frontend Dev</li>
                <li className="o-delist t-meta t-meta--small">Photography</li>
              </ul>
            </div>
          </div>
        </CSSTransition>
      </div>
      <HomepageHeroImages />
    </section>
  )
}

export default HomepageHero
