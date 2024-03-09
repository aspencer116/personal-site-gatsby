import React from "react"
import { CSSTransition } from 'react-transition-group'

const CaseStudyHeader = ({ title, subtitle, agency, role, skills, year }) => {
  return (
    <div className="c-case-study-header__primary">
      <div className="c-case-study-header__heading-container mb-lg">
        <CSSTransition
          in={true}
          timeout={3000}
          classNames="transition-case-study-header__heading"
          appear
        >
          <div>
            <span className="t-meta o-block mb-smm">Case Study</span>
            <h1 className="t-title">{title}</h1>
          </div>
        </CSSTransition>
      </div>
      <CSSTransition
        in={true}
        timeout={3000}
        classNames="transition-case-study-header__text"
        appear
      >
        <div className="c-case-study-header__text">
          <p className="t-callout c-case-study-header__sub-heading">{subtitle}</p>
          <div className="c-case-study-header__meta">
            <div className="c-case-study-header__meta-item">
              <span className="t-meta color-text-light mr-sm">Year</span>
              <span className="t-meta">{year}</span>
            </div>
            <div className="c-case-study-header__meta-item">
              <span className="t-meta color-text-light mr-sm">Agency</span>
              <span className="t-meta">{agency}</span>
            </div>
            <div className="c-case-study-header__meta-item">
              <span className="t-meta color-text-light mr-sm">Role</span>
              <span className="t-meta">{role}</span>
            </div>
            <div className="c-case-study-header__meta-item">
              <span className="t-meta color-text-light mr-sm">Skills</span>
              <ul className="o-delist c-case-study-header__meta-list-item">
                {skills.map((post) =>
                  <li
                    key={post.toString()}
                    className="t-meta"
                  >
                    {post}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default CaseStudyHeader
