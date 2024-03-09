import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Parallax from "react-rellax"
import { CSSTransition } from "react-transition-group"
import CaseStudyHeader from "../../components/case-study/caseStudyHeader"
import CaseStudyVideo from "../../components/case-study/caseStudyVideo"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import videoLightDark from "../../images/hbr/HBR_Light-Dark_compressed.mp4"

import Img from "gatsby-image"

const HBR = () => {
  const data = useStaticQuery(graphql`
    query {
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
      },
      HBRgrid: file(relativePath: { eq: "hbr/HBR_grid-1.png" }) {
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
          agency="thoughtbot"
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
            The Harvard Business Review knew the time had come to overhaul their mobile app. The goal was a full re-envisioning of the experience to engage a younger audience and align the look and feel of the app with the HBR brand.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__full-width-image">
          <Img
            fluid={data.HBRgrid.childImageSharp.fluid}
            alt="Screenshots of the new HBR mobile app arranged in a grid"
            class="c-case-study__image"
          />
        </div>
        
        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">How it started</h2>
          <p className="t-paragraph">
            The Harvard Business Review called on <a href="https://thoughtbot.com/">thoughtbot</a>, the agency where I work, to help them build a new mobile app with a clear objective—design a new app that was worthy of the HBR brand. An MVP that didn’t look or feel like an MVP.
          </p>
          <p className="t-paragraph">
          We knew we had to nail the fundamentals of a media app with features like browsing and reading articles, but we wanted to also make sure we could engage with the audience in a way that was personal and habit-building.
          </p>
        </div>

        <CaseStudyVideo
          videoURL={videoLightDark}
          ariaLabel="Screenshots of the HBR mobile app that switch between light and dark mode"
        />
        
        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">My role</h2>
          <p className="t-paragraph">
            My role as the lead product designer was broad. I facilitated a design sprint, ran user interviews, orchestrated the UX of the app, collaborated with the HBR design team on a UI direction, and even jumped into code to help make it all a reality. This was a team effort every step of the way and I worked closely with another thoughtbot designer, two HBR designers, and a talented team of developers and product managers.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.HBRcomponents.childImageSharp.fluid}
              alt="Sketchbook of YoPortfolio brand ideas opened and held in a hand."
              class="c-case-study__image"
            />
          </div>
          <div className="c-case-study__caption reverse">
            <div className="c-case-study__sticky-text">
              <p className="t-paragraph t-paragraph--small">
                To kick off the work on a new app, thoughtbot ran a design sprint with the HBR team to gain a better understanding of the work that had been done up to this point and what different internal stakeholders envisioned for the new app.
              </p>
            </div>
          </div>
        </div>

        [ image of user testing flows ]

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            The design team facilitated user interviews with people in our target audience to better understand the features that were important to our users and how we should structure the application.
          </p>
        </div>

        [ iterations of the homescreen ]

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            User testing helped us validate, or invalidate, our assumptions about how the navigation should be structured, what content should be on the home screen, and what features would help users build a habit of interacting with the app.
          </p>
        </div>

        [ brand applied to UX ]

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            As Lead Product Designer, I proposed a team structure and process that allowed the team to work effectively and cater to everyone’s strengths. The HBR design team owned the UI since they knew the brand in and out, and thoughtbot designers owned the UX since we had more experience shipping products. We all collaborated often to share ideas and eventually integrated our work into a single product vision.
          </p>
          <p className="t-paragraph">
            The thoughtbot designers also jumped into the React Native code to help developers refine UI details and close the long feedback loops that often exist between design and engineering teams. This allowed us to move faster while still upholding a high visual quality.
          </p>
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">Results</h2>
          <p className="t-paragraph">
            At the end of the project, the HBR team said this was the best experience they had ever had working with outside consultants. We also were able to deliver and launch an MVP that doesn’t look like an MVP—something all of the designers appreciated.
          </p>
          [ quote from HBR ]
        </div>



        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph t-paragraph--callout">
            The Harvard Business Review knew the time had come to overhaul their
            mobile app. The goal was a full re-envisioning of the experience to
            engage a younger audience and align the look and feel of the app
            with the HBR brand.
          </p>
        </div>
        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">How it started</h2>
          <p className="t-paragraph">
            The Harvard Business Review called on{" "}
            <a href="https://thoughtbot.com/">thoughtbot</a>, the agency where I
            worked, to help them build a new mobile app with a clear
            objective—design a new app that was worthy of the HBR brand. An MVP
            that didn’t look or feel like an MVP.
          </p>
          <p className="t-paragraph">
            We knew we had to nail the fundamentals of a media app with features
            like browsing and reading articles, but we wanted to also make sure
            we could engage with the audience in a way that was personal and
            habit building.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.HBRcomponents.childImageSharp.fluid}
              alt="Sketchbook of YoPortfolio brand ideas opened and held in a hand."
              class="c-case-study__image"
            />
            <Img
              fluid={data.HBRcomponents.childImageSharp.fluid}
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
            <h2 className="o-columns__half t-heading-2">My role</h2>
            <p className="t-paragraph">
              My role as the lead product designer was broad. I facilitated a
              design sprint, ran user interviews, orchestrated the UX of the
              app, collaborated with the HBR design team on a UI direction, and
              even jumped into code to help make it all a reality. This was a
              team effort every step of the way and I worked closely with
              another thoughtbot designer, two HBR designers, and a talented
              team of developers and product managers.
            </p>
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
              fluid={data.HBRcomponents.childImageSharp.fluid}
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
              fluid={data.HBRcomponents.childImageSharp.fluid}
              alt="Various design elements of YoPortfolio shown on a monitor screen."
              class="c-case-study__image"
            />
          </div>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.HBRcomponents.childImageSharp.fluid}
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
