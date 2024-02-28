import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Parallax from "react-rellax"
import { CSSTransition } from "react-transition-group"
import CaseStudyHeader from "../../components/case-study/caseStudyHeader"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Img from "gatsby-image"

const HBR = () => {
  const data = useStaticQuery(graphql`
    query {
      yoPortfolioSketch1: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_sketch_1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioSketch2: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_sketch_2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioBrand1: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_brand_1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioBrand2: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_brand_2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioBrand3: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_brand_3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioBrand4: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_brand_4.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUI1: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUI2: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUI5: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_5.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUI66: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_66.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUIgif: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_gif.gif" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoPortfolioUI7: file(
        relativePath: { eq: "yo-portfolio/yo-portfolio_UI_7.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HBRcomponents: file(relativePath: { eq: "hbr/HBR_components.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HBRheader: file(relativePath: { eq: "hbr/HBR_mockup-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout lightVersion={true}>
      <Helmet>
        <script src={withPrefix("js/safe-focus.js")} type="text/javascript" />
      </Helmet>
      <SEO title="Andrew Spencer | Harvard Business Review Case Study" />

      <section className="c-case-study-header">
        <CaseStudyHeader
          title="Harvard Business Review"
          subtitle="Reinventing the HBR mobile app for the next generation of business&nbsp;leaders"
          year="2023"
          role="Product Design Lead"
          skills={["Design Sprint", "User Research", "React Native"]}
          imageAltText="Person holding a phone in their lap looking at the Harvard Business Review mobile app."
        />
        <CSSTransition
          in={true}
          timeout={600}
          classNames="c-case-study-header__secondary-transition"
          appear
        >
          <div className="c-case-study-header__secondary">
            <Parallax speed={-1}>
              <Img
                height="100"
                fluid={data.HBRheader.childImageSharp.fluid}
                class="c-case-study-header__image"
                alt="Person holding a phone in their lap looking at the Harvard Business Review mobile app."
              />
            </Parallax>
          </div>
        </CSSTransition>
      </section>

      <div className="c-case-study">
        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph t-paragraph--callout">
            The time had come to overhaul the Harvard Business Review mobile
            app—a full re-envisining and a chance to bring its design up to par
            with the rest of the HBR brand.
          </p>
        </div>
        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">Where we started</h2>
          <p className="t-paragraph">
            From the beginning our objective was clear, design a mobile
            experience for HBR that is worth of the notoriety the brand caries.
            It was important that the app would help HBR engage with a younger
            audience. As a member of the team from{" "}
            <a href="https://thoughtbot.com/">thougthbot</a> called on to help
            meet this goal, I was excited to dive in.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.yoPortfolioSketch1.childImageSharp.fluid}
              alt="Sketchbook of YoPortfolio brand ideas opened and held in a hand."
              class="c-case-study__image"
            />
            <Img
              fluid={data.yoPortfolioSketch2.childImageSharp.fluid}
              alt="YoPortfolio brand sketches."
              class="c-case-study__image"
            />
          </div>
          <div className="c-case-study__caption reverse">
            <div className="c-case-study__sticky-text">
              <p className="t-paragraph t-paragraph--small">
                The existing HBR app did not reflect their brand standards nor
                did in have a strong feature-set that resonated with users.
              </p>
            </div>
          </div>
        </div>

        <div className="c-case-study__section c-case-study__full-width-image">
          <Img
            fluid={data.HBRcomponents.childImageSharp.fluid}
            alt="Various YoPortfolio brand explorations with different design styles."
            class="c-case-study__image"
          />
        </div>

        <div className="c-case-study__section c-case-study__section--full-width-image">
          <div className="c-case-study__caption">
            <h2 className="o-columns__half t-heading-2">
              Listen: to the client and the user
            </h2>
            <p className="t-paragraph">
              To kickoff the work on a new app, thoughtbot ran a design sprint
              with the HBR team to gain better understanding of the work that
              had been done up to this point and what different internal
              stakeholders envisioned for the new app.
            </p>
            <p className="t-paragraph">
              We then conducted numerous rounds of user testing with early
              prototypes of the app. This helped inform the features we
              ultimately decided to prioritize building for the MVP.
            </p>
          </div>
          <div className="c-case-study__full-width-image">
            <Img
              fluid={data.yoPortfolioBrand1.childImageSharp.fluid}
              alt="Various YoPortfolio brand explorations with different design styles."
              class="c-case-study__image"
            />
          </div>
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-2">Brand meets product</h2>
          <p className="t-paragraph">
            Copy about bringing the HBR brand into the mobile product. Copy
            about bringing the HBR brand into the mobile product. Copy about
            bringing the HBR brand into the mobile product. Copy about bringing
            the HBR brand into the mobile product.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__caption">
            <p className="t-paragraph">
              Copy about an image. Copy about an image. Copy about an image.
              Copy about an image. Copy about an image.
            </p>
          </div>
          <div className="c-case-study__image-container">
            <Img
              fluid={data.yoPortfolioUI1.childImageSharp.fluid}
              alt="Various design elements of YoPortfolio shown on a monitor screen."
              class="c-case-study__image"
            />
          </div>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.yoPortfolioUI1.childImageSharp.fluid}
              alt="Various design elements of YoPortfolio shown on a monitor screen."
              class="c-case-study__image"
            />
          </div>
          <div className="c-case-study__caption">
            <p className="t-paragraph">
              Copy about an image. Copy about an image. Copy about an image.
              Copy about an image. Copy about an image.
            </p>
          </div>
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-2">Build</h2>
          <p className="t-paragraph">
            Design and engineering worked closely to ensure the final built
            product reflected the Figma designs down to the smallest detail.
            This close collaboration ensured that if the scope of a feature
            changed or a specific UI state needed to be designed, those changes
            could be handled quickly by designers and developers working
            side-by-side in the React Native codebase.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HBR
