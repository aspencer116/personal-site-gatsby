import { Link } from "gatsby"
import React from "react"

const WorkListing = ({
  title,
  description,
  date,
  tags,
  liveSite,
  caseStudy,
}) => (
  <li className="c-work-listing">
    <h3 className="t-heading-3 c-work-listing__title">{title}</h3>
    <p className="t-paragraph t-paragraph--tight c-work-listing__body">
      {description}
    </p>
    <div className="c-work-listing__meta">
      <div className="c-work-listing__meta-inner">
        <span className="t-meta t-meta--small color-text-light">{date}</span>
        {tags.map(post => (
          <span
            key={post.toString()}
            className="t-meta t-meta--small color-text-light"
          >
            {post}
          </span>
        ))}
      </div>
      {liveSite && (
        <a
          className="t-meta t-meta--small t-bold c-work-listing__site"
          href={liveSite}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
          <svg
            className="c-external-icon"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1.34998H7.65V7.99998M7.3 1.69998L1.35 7.64998" />
          </svg>
        </a>
      )}
      {caseStudy && (
        <Link className="c-button mt-16" to={caseStudy}>
          Case Study
        </Link>
      )}
    </div>
  </li>
)

export default WorkListing
