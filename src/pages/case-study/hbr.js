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
      HBRdesignsprint: file(relativePath: { eq: "hbr/HBR_design-sprint.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HBRhomepageiteration: file(relativePath: { eq: "hbr/HBR_homepage_iteration.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HBRusertest: file(relativePath: { eq: "hbr/HBR_user-test.png" }) {
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
          <h2 className="t-heading-1">The journey</h2>
          <p className="t-paragraph">
            Designing and building great products is never a straight line. In my role as the lead product designer on the project I had a number of responsibilities through the twists and turns of the project. I led a design sprint, ran user interviews, orchestrated the UX of the app, collaborated with the HBR design team on the UI, and even jumped into code. This was a team effort every step of the way. I worked closely with another thoughtbot designer, two HBR designers, and a talented team of developers and product managers.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.HBRdesignsprint.childImageSharp.fluid}
              alt="Screenshot of the virtual white board used for the HBR design sprint. Lots of stickynotes with text that is too small to read."
              class="c-case-study__image"
            />
          </div>
          <div className="c-case-study__caption">
            <div className="c-case-study__sticky-text">
              <p className="t-paragraph">
                In the first week of the engagement between thoughtbot and HBR, I helped run a design sprint that allowed us to quickly explore ideas and align on a vision for the new app.
              </p>
            </div>
          </div>
        </div>

        <div className="c-case-study__section c-case-study__section--2-column reverse">
          <div className="c-case-study__image-container">
            <Img
              fluid={data.HBRusertest.childImageSharp.fluid}
              alt="Screenshot of the virtual white board used for the HBR design sprint. Lots of stickynotes with text that is too small to read."
              class="c-case-study__image"
            />
          </div>
          <div className="c-case-study__caption">
            <div className="c-case-study__sticky-text">
              <p className="t-paragraph">
                We prototyped and user tested early lo-fi designs to better understand the features that were important to users.
              </p>
            </div>
          </div>
        </div>

        <div className="c-case-study__section c-case-study__full-width-image">
          <Img
            fluid={data.HBRhomepageiteration.childImageSharp.fluid}
            alt="Iteration of the design of the HBR mobile app homepage. Showing different layouts and concepts."
            class="c-case-study__image"
          />
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            User testing provided invaluable data that caused us to rethink our assumptions about what features would be valuable and how to structure the app. We iterated on the design of the app as we gathered more data from user testing.
          </p>
          <p className="t-paragraph">
            I proposed a structure for the design team that catered to everyone’s strengths and allowed us to work effectively. The HBR designers owned the UI since they knew the brand in and out, and the thoughtbot designers owned the UX. We collaborated often to share ideas and eventually integrated our work into a single product vision.
          </p>
        </div>

        [ brand applied to UX ]

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            The thoughtbot designers also jumped into the React Native code to help developers refine UI details and close the long feedback loops that often exist between design and engineering teams. This allowed us to move faster while still upholding a high visual quality.
          </p>
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">Results</h2>
          <p className="t-paragraph">
            At the end of the project, the HBR team said this was the best experience they had ever had working with outside consultants. We also were able to deliver and launch an MVP that doesn’t look like an MVP—something all of the designers appreciated.
          </p>
          [ quote from HBR ]
        </div>
      </div>
    </Layout>
  )
}

export default HBR
