import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import {CSSTransition} from 'react-transition-group'
import Parallax from 'react-rellax'

const CaseStudyHeader = ({ title, subtitle, tags, year, image, imageAltText }) => {
  const data = useStaticQuery(graphql`
    query {
      yoPortfolioHeader: file(relativePath: { eq: "yo-portfolio/yo-portfolio_header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) { ...GatsbyImageSharpFluid }
        }
      },
    }
  `)

  return (
    <div className="c-case-study-header">
      <div className="c-case-study-header__primary">
        <div className="c-case-study-header__heading-container">
          <CSSTransition
            in={true}
            timeout={3000}
            classNames="transition-case-study-header__text"
            appear
          >
            <div>
              <h1 className="t-heading-2">{ title }</h1>
              <p className="t-paragraph t-paragraph--callout c-case-study-header__sub-heading">{ subtitle }</p>
            </div>
          </CSSTransition>
        </div>
        <div className="c-case-study-header__meta">
          <ul className="o-delist c-case-study-header__tags">
              {tags.map((post) =>
              <li
                key={post.toString()}
                className="t-meta t-meta--small"
              >
                { post }
              </li>
            )}
          </ul>
          <p className="t-meta t-meta--small c-case-study-header__year">{ year }</p>
        </div>
      </div>
      <CSSTransition
        in={true}
        timeout={5000}
        classNames="c-case-study-header__secondary-transition"
        appear
      >
        <div className="c-case-study-header__secondary">
            <Parallax speed={-2}>
              <Img fluid={data.yoPortfolioHeader.childImageSharp.fluid} alt={imageAltText} class="c-case-study-header__image"/>
            </Parallax>
        </div>
      </CSSTransition>
    </div>
  )
}

export default CaseStudyHeader
