import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Helmet from "react-helmet"
import Parallax from "react-rellax"
import { CSSTransition } from "react-transition-group"
import CaseStudyHeader from "../../components/case-study/caseStudyHeader"
import CaseStudyVideo from "../../components/case-study/caseStudyVideo"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import videoLatestFeed from "../../images/hbr/HBR_LatestFeed.mp4"
import videoLightDark from "../../images/hbr/HBR_Light-Dark.mp4"
import videoTip from "../../images/hbr/HBR_TipOfTheDay.mp4"


const HBR = () => {
  const data = useStaticQuery(graphql`
    query {
      HBRheader: file(relativePath: { eq: "hbr/HBR_mockup-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      },
      HBRgrid: file(relativePath: { eq: "hbr/HBR_grid-3.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRdesignsprint: file(relativePath: { eq: "hbr/HBR_design-sprint.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRhomepageiteration: file(relativePath: { eq: "hbr/HBR_homepage_iteration.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRusertest: file(relativePath: { eq: "hbr/HBR_user-test.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRstyles: file(relativePath: { eq: "hbr/HBR_styles.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRcards: file(relativePath: { eq: "hbr/HBR_cards.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRwelcome: file(relativePath: { eq: "hbr/HBR_welcome.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1300
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRsummary: file(relativePath: { eq: "hbr/HBR_summary.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      HBRforYou: file(relativePath: { eq: "hbr/HBR_forYou.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  // Get processed images
  const images = {
    HBRheader: getImage(data.HBRheader),
    HBRgrid: getImage(data.HBRgrid),
    HBRdesignsprint: getImage(data.HBRdesignsprint),
    HBRhomepageiteration: getImage(data.HBRhomepageiteration),
    HBRusertest: getImage(data.HBRusertest),
    HBRstyles: getImage(data.HBRstyles),
    HBRcards: getImage(data.HBRcards),
    HBRwelcome: getImage(data.HBRwelcome),
    HBRsummary: getImage(data.HBRsummary),
    HBRforYou: getImage(data.HBRforYou)
  }

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
          role="Lead Product Designer"
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
              <GatsbyImage 
                height="100"
                image={images.HBRheader} 
                className="c-case-study-header__image"
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

        <div className="c-case-study__section full-width">
          <GatsbyImage 
            image={images.HBRgrid} 
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
          fullWidth
          section
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
            <GatsbyImage 
              image={images.HBRdesignsprint} 
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
            <GatsbyImage 
              image={images.HBRusertest} 
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

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            User testing provided invaluable data that caused us to rethink our assumptions about what features would be valuable and how to structure the app. We iterated on the design of the app as we gathered more data from user testing.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--sm full-width">
          <GatsbyImage 
            image={images.HBRhomepageiteration} 
            alt="Iteration of the design of the HBR mobile app homepage. Showing different layouts and concepts."
            class="c-case-study__image"
          />
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            As the lead product designer, I proposed a structure for the design team that catered to everyone’s strengths and allowed us to work effectively. The HBR designers owned the UI since they knew the brand in and out, and the thoughtbot designers owned the UX. We collaborated often to share ideas and eventually integrated our work into a single product vision.
          </p>
          <p className="t-paragraph">
            To help ensure the app would be well supported in the long term, I was also able to mentor one of the HBR designers who took over the product design responsibilities once our engagement was over.
          </p>
        </div>

        <div className="c-case-study__section">
          <div className="mb-md">
            <GatsbyImage 
              image={images.HBRstyles} 
              alt="Various text and input styles used while designing the HBR app."
              class="c-case-study__image"
            />
          </div>
          <div className="mb-md">
            <GatsbyImage 
              image={images.HBRcards} 
              alt="Various text and input styles used while designing the HBR app."
              class="c-case-study__image"
            />
          </div>
          <p className="o-text-width-limiter t-paragraph t-paragraph--small">As the design was refined, components and styles were added to Figma to keep everyone aligned and help with dev handoff.</p>
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <p className="t-paragraph">
            The thoughtbot designers also jumped into the React Native code to help developers refine UI details and close the long feedback loops that often exist between design and engineering teams. This allowed us to move faster while still upholding a high visual quality.
          </p>
        </div>

        <div className="c-case-study__section c-case-study__section--sm">
          <div className="g-2-col mb-md">
            <div>
              <GatsbyImage 
                image={images.HBRforYou} 
                alt="For You screen of the HBR app showing a filter for topics with the current issue selected."
                class="c-case-study__image"
              />
              <p className="mt-md o-text-width-limiter t-paragraph t-paragraph--small">
                The For You feed contained content from topics chosen by the user along with a special callout for content from the current print issue of the Harvard Business Review.
              </p>
            </div>
            <div>
              <CaseStudyVideo
                videoURL={videoTip}
                ariaLabel="Screenshots of the HBR mobile app that switch between light and dark mode"
              />
              <p className="mt-md o-text-width-limiter t-paragraph t-paragraph--small">
              To engage users on the go, short-form content such as the popular Management Tip of the Day was highlighted in the latest feed.
              </p>
            </div>
          </div>
        </div>

        <div className="c-case-study__section">
          <div className="g-2-col mb-md">
            <div>
              <CaseStudyVideo
                videoURL={videoLatestFeed}
                ariaLabel="The Lastest feed in the HBR app scrolls from top to bottom."
              />
              <p className="mt-md o-text-width-limiter t-paragraph t-paragraph--small">
              Editorial-style typography and unique content modules added variety to the feeds and helped organize HBR’s extensive content library.
              </p>
            </div>
            <div>
              <GatsbyImage 
                image={images.HBRwelcome} 
                alt="Welcome message in the HBR app."
                class="c-case-study__image"
              />
              <p className="mt-md o-text-width-limiter t-paragraph t-paragraph--small">
                Personalized messages guide users through the unique features of the app, including the personalized For You page.
              </p>
            </div>
          </div>
        </div>

        <div className="c-case-study__section full-width">
          <GatsbyImage 
            image={images.HBRsummary} 
            alt="Four screens from the HBR app showing the onboarding flow and an article."
            class="c-case-study__image"
          />
        </div>

        <div className="o-text-width-limiter c-case-study__section">
          <h2 className="t-heading-1">Results</h2>
          <p className="t-paragraph">
          In less than a year we went from a rough concept to launching in the Android and iOS app stores! We were able to deliver an MVP that doesn’t look or feel like an MVP. Feedback from the HBR team was extremely positive as we helped them not only launch a great app but also mentored their team.
          </p>
        </div>
        <div className="o-text-width-limiter c-case-study__section">
          <blockquote className="c-quote">
            <p className="t-paragraph t-paragraph--callout">
              When I look at the product right now, it's polished and complete, <strong>it sets a high design standard</strong>. I understand some things are not perfect but in comparison to what I was assuming, this is so much more polished and done and complete.
            </p>
          <footer className="t-paragraph t-paragraph--small">
            — HBR's Director of User Experience and Product Design
          </footer>
          </blockquote>
        </div>
      </div>
    </Layout>
  )
}

export default HBR
