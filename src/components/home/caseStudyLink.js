import React from "react"
import { Link } from "gatsby"

const CaseStudyLink = ({ linkPath, linkTitle, linkDescription, tags, callout, color, image, comingSoon }) => (
  <li
    className={`c-case-study-link ${callout ? 'c-case-study-link--callout' : ''} ${comingSoon ? 'c-case-study-link--coming-soon' : ''}`}
    style={{background: color}}
  >
    <img src={ image } alt="" className="c-case-study-link__image"/>
    <Link
      to={linkPath}
      className="c-case-study-link__link-container"
    >
      <div className="c-case-study-link__primary">
        {comingSoon &&
          <span className="t-meta c-case-study-link__coming-soon">Coming Soon</span>
        }
        <h3 className="t-heading-3 t-heading-3--reverse c-case-study-link__text">{ linkTitle }</h3>
        <p className="t-paragraph t-paragraph--reverse c-case-study-link__text">{ linkDescription }</p>
      </div>
      <div className="c-case-study-link__secondary">
        <h4 className="o-visually-hidden">Tags</h4>
        <ul className="o-delist c-case-study-link__tags">
            {tags.map((post) =>
            <li
              key={post.toString()}
              className="t-meta c-case-study-link__tag"
            >
              {post}
            </li>
          )}
        </ul>
      </div>
      <div className="c-case-study-link__tertiary">
        <span className="c-case-study-link__link-text">Case Study</span>
        <span className="c-case-study-link__arrow"></span>
      </div>
    </Link>
  </li>
)

export default CaseStudyLink
