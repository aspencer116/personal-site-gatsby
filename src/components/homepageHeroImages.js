import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Parallax from 'react-rellax'
import { CSSTransition } from 'react-transition-group'

const HomepageHeroImages = () => {
  const data = useStaticQuery(graphql`
    query {
      hero1: file(relativePath: { eq: "hero_frontrow.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      },
      hero2: file(relativePath: { eq: "HBR_latest-feed.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      },
      hero2Nav: file(relativePath: { eq: "HBR_nav-bar.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  // Get processed images
  const hero1Image = getImage(data.hero1)
  const hero2Image = getImage(data.hero2)
  const hero2NavImage = getImage(data.hero2Nav)

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
                <GatsbyImage 
                  image={hero1Image} 
                  alt="Screenshot of the Frontrow Health website screenshot on a mobile device. Showing a list of medical products available for purchase."
                />
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
                <GatsbyImage 
                  image={hero2Image} 
                  alt="Screenshot of the Harvard Business Review mobile app. Showing a feed of articles."
                />
              </Parallax>
              <div className="c-homepage-hero__navigation">
                <GatsbyImage 
                  image={hero2NavImage} 
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomepageHeroImages
