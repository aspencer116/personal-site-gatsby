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
            <h1 className="t-heading-1 t-heading-1--reverse c-homepage-hero__heading">
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span>e</span>
              <span className="with-space">r</span>
              <span>&</span>
              <br/>
              <span>W</span>
              <span>e</span>
              <span className="with-space">b</span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
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
              <p className="t-paragraph">I focus on crafting great web experiences with thoughtful UX; beautiful design; and semantic, accessible frontend&nbsp;code.</p>
              <p className="t-paragraph">There are so many factors involved in creating for the web. I find it valuable to have a broad knowledge of what it takes to build successful websites and digital products while focusing on the parts of the process I enjoy most—user-centered design, HTML, and CSS. This means I do my most valuable work when involved in a project from start to finish. With empathy, creative solutions, and an eye for design I seek to balance user needs, client goals, and team&nbsp;dynamics.</p>
              <p className="t-paragraph">In my free time I enjoy traveling with my wife and photographing our adventures—or our puppy. Whether we are exploring a new city or a National Park, I’m always searching for the best coffee and tacos—to be enjoyed&nbsp;separately.</p>
            </div>
          </CSSTransition>
        </div>
        <HomepageHeroImages />
      </div>
      <div className="c-homepage-hero__secondary">
        <p className="t-meta c-homepage-hero__meta-text">Pixels&nbsp;&&nbsp;Code</p>
      </div>
      <div className="c-homepage-hero__tertiary">
      </div>
    </section>
  )
}

export default HomepageHero
