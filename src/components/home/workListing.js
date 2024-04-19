import { Link } from "gatsby";
import React from "react";

const CaseStudy = ({ caseStudy, children }) => (caseStudy ?
  <Link className="c-work-listing__link" to={caseStudy}>
    {children}
  </Link>
  : children
);

const WorkListing = ({
  title,
  description,
  date,
  tags,
  liveSite,
  caseStudy,
  image,
  image2,
  imageAlt,
  featured,
}) => (
  <li className={'c-work-listing' + (featured ? ' c-work-listing--featured' : '')}>
    <CaseStudy caseStudy={caseStudy}>
      {image && (
        <div className="c-work-listing__image-container">
          <img className="c-work-listing__image" src={image} alt={imageAlt} />
          <img className="c-work-listing__image" src={image2} aria-hidden="true" />
        </div>
      )}
      {caseStudy && (
        <p
          className="t-meta t-meta--small t-bold c-work-listing__site"
          href={liveSite}
          target="_blank"
          rel="noreferrer"
        >
          Case Study
        </p>
      )}
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
      </div>
    </CaseStudy>
  </li>
)

export default WorkListing
