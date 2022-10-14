import React from "react"

const CurrentWork = () => (
  <section className="c-current-work">
    <div className="c-current-work__inner">
      <h2 className="t-meta t-meta--small c-current-work__meta">Currently</h2>
      <h3 className="t-heading-4 c-current-work__title">Senior Product Designer</h3>
      <span className="t-heading-5 c-current-work__sub-title">
        @
        <a className="o-delink" href="https://thoughtbot.com/" target="_blank" rel="noopener noreferrer">thoughtbot</a>
        —a digital product consultancy
      </span>
      <p className="t-paragraph t-paragraph--callout">Helping organizations kickstart and scale their products by providing expertise in UX, product design, and frontend&nbsp;development.</p>
    </div>

    <div className="c-current-work__inner">
      <h2 className="t-meta t-meta--small c-current-work__meta">Previously</h2>
      <h3 className="t-heading-4 c-current-work__title">Product Designer</h3>
      <span className="t-heading-5 c-current-work__sub-title c-current-work__meta">
        @
        <a className="o-delink" href="https://thoughtbot.com/" target="_blank" rel="noopener noreferrer">thoughtbot</a>
        —a digital product consultancy
      </span>

      <h3 className="t-heading-4 c-current-work__title">Frontend Designer</h3>
      <span className="t-heading-5 c-current-work__sub-title">
        @
        <a className="o-delink" href="https://sparkbox.com/" target="_blank" rel="noopener noreferrer">Sparkbox</a>
        —a web consultancy
      </span>
      <ul>
        <li className="t-list t-paragraph">Worked as a designer who also writes code, helping clients ship everything from digital products and design systems to marketing and e-commerce sites while bridging design and development&nbsp;teams.</li>
        <li className="t-list t-paragraph">Provided expertise in UI design, animation, accessibility, HTML, and CSS while balancing multiple clients and helping them solve user and business&nbsp;problems.</li>
      </ul>
    </div>
  </section>
)

export default CurrentWork
