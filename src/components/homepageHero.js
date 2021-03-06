import React from "react"
import {CSSTransition} from 'react-transition-group'
import HomepageHeroImages from "./homepageHeroImages"

const HomepageHero = () => {
  return (
    <section className="c-homepage-hero">
      <div className="c-homepage-hero__primary">
        <div className="c-homepage-hero__text-column">
          <CSSTransition
            in={true}
            timeout={3000}
            classNames="transition-homepage-hero__heading"
            appear
          >
            <h1 className="t-title c-homepage-hero__heading">
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span className="with-space">n</span>
              <br/>
              <span className="with-space">&</span>
              <span>C</span>
              <span>o</span>
              <span>d</span>
              <span>e</span>
            </h1>
          </CSSTransition>

          <CSSTransition
            in={true}
            timeout={5000}
            classNames="transition-homepage-hero__text"
            appear
          >
            <div className="c-homepage-hero__text-container">
              <p className="t-paragraph t-paragraph--callout">Hello, I’m Andrew, a creative problem solver who works at the intersection of design and&nbsp;code.</p>
              <p className="t-paragraph">Fueled by coffee and a desire to solve problems while learning something new in the process, my interests are broad and extend on both sides of the designer and developer spectrum. My true passion lies in the gray area where those two worlds collide—user-centered design, HTML, and CSS. You might call this a unicorn, frontend designer, or design engineer but I call it my happy&nbsp;place.</p>
              <p className="t-paragraph">I’ve designed and built everything from non-profit and ecommerce websites to design systems and digital products. I strive to balance user needs, client goals, and team dynamics and work with empathy, methodical creativity, and an eye for&nbsp;design.</p>
              <p className="t-paragraph">In my free time I enjoy traveling with my wife and photographing our adventures—or our puppy. Whether we are exploring a new city or a national park, I’m always searching for the best coffee and tacos—to be enjoyed&nbsp;separately.</p>
            </div>
          </CSSTransition>
        </div>
        <HomepageHeroImages />
      </div>
      <div className="c-homepage-hero__secondary">
        <p className="t-meta c-homepage-hero__meta-text">Boston&nbsp;MA</p>
      </div>
      <div className="c-homepage-hero__tertiary">
      </div>
    </section>
  )
}

export default HomepageHero
