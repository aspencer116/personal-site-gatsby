import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {CSSTransition} from 'react-transition-group'
import Img from "gatsby-image"
import Parallax from 'react-rellax'

const HomepageHeroImages = () => {
  const data = useStaticQuery(graphql`
    query {
      hero1: file(relativePath: { eq: "hero_frontrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hero2: file(relativePath: { eq: "HBR_latest-feed.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hero2Nav: file(relativePath: { eq: "HBR_nav-bar.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="c-homepage-hero__secondary">
      <div className="c-homepage-hero__images-column-inner">
        <CSSTransition
          in={true}
          timeout={5000}
          classNames="c-homepage-hero__image-1"
          appear
        >
          <div className="c-homepage-hero__image-frame">
            <div className="c-homepage-hero__image-mask">
              <Parallax speed={10}>
                <Img fluid={data.hero1.childImageSharp.fluid} alt="Screenshot of the Frontrow Health website screenshot on a mobile device. Showing a list of medical products available for purchase."/>
              </Parallax>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={6000}
          classNames="c-homepage-hero__image-2"
          appear
        >
          <div className="c-homepage-hero__image-frame c-homepage-hero__image-container--alt">
            <div className="c-homepage-hero__image-mask">
              <Parallax speed={6}>
                <Img fluid={data.hero2.childImageSharp.fluid} alt="Screenshot of the Harvard Business Review mobile app. Showing a feed of articles."/>
              </Parallax>
              <div className="c-homepage-hero__navigation">
                <Img fluid={data.hero2Nav.childImageSharp.fluid} ariaHidden="true"/>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomepageHeroImages
