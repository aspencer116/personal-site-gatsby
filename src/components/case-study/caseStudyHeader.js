import React from "react"
import { CSSTransition } from 'react-transition-group'

const CaseStudyHeader = ({ title, subtitle, role, skills, year }) => {
  return (
    <div className="c-case-study-header__primary">
      <div className="c-case-study-header__heading-container">
        <CSSTransition
          in={true}
          timeout={3000}
          classNames="transition-case-study-header__heading"
          appear
        >
          <div>
            <span className="t-meta o-block mb-24">Case Study</span>
            <h1 className="t-title">{ title }</h1>
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
          <p className="t-callout c-case-study-header__sub-heading">{ subtitle }</p>
          <div className="c-case-study-header__meta">
            <div className="c-case-study-header__meta-item">
              <span className="t-meta">{ year }</span>
            </div>
            <div className="c-case-study-header__meta-item">
              <span className="t-meta color-text-light mr-4">Role</span>
              <span className="t-meta">{ role }</span>
            </div>
            <ul className="o-delist c-case-study-header__meta-item">
                <li className="t-meta color-text-light mr-4">Skills</li>
                {skills.map((post) =>
                <li
                  key={post.toString()}
                  className="t-meta"
                >
                  { post }
                </li>
              )}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default CaseStudyHeader
