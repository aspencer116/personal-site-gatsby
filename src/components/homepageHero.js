import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero-background_resized.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section class="homepage-hero">
      <div class="homepage-hero__primary">
        <div class="homepage-hero__text-column">
          <h1 class="t-heading-1--reverse homepage-hero__heading">Web Designer & Developer</h1>

          <div class="homepage-hero__text-container">
            <p class="t-paragraph t-paragraph--callout">Andrew Spencer goes by many titles. UX/UI'er, Web Builder, Creative Developer, Frontend Designer, etc. Oh, and he enjoys branding as well.</p>
            <p class="t-paragraph t-paragraph--reverse">Andrew lives in that weird space between design and code, carrying a unique balance of creativity and logic. He enjoys solving complex problems for clients and their users—with both design and code.</p>
            <p class="t-paragraph t-paragraph--reverse">In his free time Andrew enjoys traveling with his wife and photographing either their adventures or their our puppy, Piper. Whether they are exploring a new city or National Park, he is always on a quest for the perfect cup of coffee and tacos—to be enjoyed separately.</p>
          </div>
        </div>
      </div>
      <div class="homepage-hero__secondary">
        <p class="t-meta homepage-hero__meta-text">Design & Code</p>

        <div class="homepage-hero__background-image">
          <Img fluid={data.heroBackground.childImageSharp.fluid} alt="Green woods with a mysterious look"/>
        </div>
      </div>
      <div class="homepage-hero__tertiary">
      </div>
    </section>
  )
}

export default HomepageHero
