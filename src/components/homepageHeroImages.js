import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {CSSTransition} from 'react-transition-group'
import Img from "gatsby-image"
import Parallax from 'react-rellax'

const HomepageHeroImages = () => {
  const data = useStaticQuery(graphql`
    query {
      heroYoPortfolio: file(relativePath: { eq: "hero_yo-portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      heroTommyJohn: file(relativePath: { eq: "hero_tommy-john.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      heroNCSBN: file(relativePath: { eq: "hero_ncsbn.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="c-homepage-hero__images-column">
      <div className="c-homepage-hero__images-column-inner">
        <CSSTransition
          in={true}
          timeout={4000}
          classNames="c-homepage-hero__image-1"
          appear
        >
          <div className="c-homepage-hero__image-container">
            <Parallax speed={10}>
              <Img fluid={data.heroYoPortfolio.childImageSharp.fluid} alt="YoPortfolio website screenshot on a mobile device."/>
            </Parallax>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={4000}
          classNames="c-homepage-hero__image-2"
          appear
        >
          <div className="c-homepage-hero__image-container c-homepage-hero__image-container--alt">
            <Parallax speed={6}>
              <Img fluid={data.heroTommyJohn.childImageSharp.fluid} alt="Whitworth University website screenshot on a mobile device with the navigation open."/>
            </Parallax>
          </div>
        </CSSTransition>
      </div>
      <div className="c-homepage-hero__images-column-inner c-homepage-hero__images-column-inner--alt">
        <CSSTransition
          in={true}
          timeout={4000}
          classNames="c-homepage-hero__image-3"
          appear
        >
          <div className="c-homepage-hero__image-container">
            <Parallax speed={8}>
              <Img fluid={data.heroNCSBN.childImageSharp.fluid} alt="NCSBN website screenshot on a mobile device."/>
            </Parallax>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomepageHeroImages
