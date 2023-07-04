import React from "react"

const Idea = ({callout, type, title, forName, actionLink, actionText}) => (
  <li className="o-delist">
    <a target="_blank" href={actionLink} className={`o-delink c-idea ${callout ? 'c-idea--callout' : ''}`}>
      <div className="c-idea__top">
        <span className="t-meta t-meta--small t-subtle c-idea__type">{ type }</span>
        <h3 className="t-heading-4 c-idea__title">{ title }</h3>
      </div>
      <div className="c-idea__bottom">
        {forName &&
          <div>
            <span className="t-paragraph--small t-tight t-subtle">for { forName }</span>
          </div>
        }
        <div className="c-idea__action">
          <span className="t-paragraph--small t-tight">{ actionText }</span>
          <svg className="c-idea__icon" width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 .5h9.5V10M9 1l-9 9" stroke="inherit"/></svg>
        </div>
      </div>
    </a>
  </li>
)

export default Idea
