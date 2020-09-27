import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Helmet from "react-helmet"
import CaseStudyHeader from "../../components/case-study/caseStudyHeader"
import { withPrefix } from "gatsby"

import Img from "gatsby-image"

const YoPortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      yoPortfolioSketch1: file(relativePath: { eq: "yo-portfolio_sketch_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioSketch2: file(relativePath: { eq: "yo-portfolio_sketch_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioBrand1: file(relativePath: { eq: "yo-portfolio_brand_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioBrand2: file(relativePath: { eq: "yo-portfolio_brand_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioBrand3: file(relativePath: { eq: "yo-portfolio_brand_3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioBrand4: file(relativePath: { eq: "yo-portfolio_brand_4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioUI1: file(relativePath: { eq: "yo-portfolio_UI_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioUI2: file(relativePath: { eq: "yo-portfolio_UI_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioUI5: file(relativePath: { eq: "yo-portfolio_UI_5.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioUI6: file(relativePath: { eq: "yo-portfolio_UI_66.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      yoPortfolioUI7: file(relativePath: { eq: "yo-portfolio_UI_7.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <Layout lightVersion={true}>
      <Helmet>
          <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Yo Portfolio Case Study" />

      <CaseStudyHeader
        title="YoPortfolio"
        subtitle="A startup stock market tool needed a playful brand and product design to launch them into the future."
        tags={["Branding", "Product Design", "Animation"]}
        year="2018"
        image="images/casestudy/yo-portfolio_header.jpg"
        imageAltText="Screenshots of the YoPortfolio website"
      />

    <div className="c-case-study">
      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Brand Design</h2>
        <p className="t-paragraph">YoPortfolio was a project taken on by the team at Sparkbox. I served the role of brand and interface designer and used my understanding of design and development to guide the client in cost-saving decisions that still resulted in a great product.</p>
        <p className="t-paragraph">Our goal was to create a beautiful and easy-to-use product that showcased the best features of YoPortfolio. This "minimum viable product" was something the client could promote to build a user base and gain additional funding.</p>
        <h3 className="o-columns__half t-heading-4">Strategy</h3>
        <p className="t-paragraph">The client came with a well-researched vision for a stock market product that would allow users to know if they were beating the market and provide them with tools to guide future decisions. A niche product with a great vision.</p>
        <p className="t-paragraph">Sparkbox provided a technical and design strategy to build something valuable that could be expanded upon in the future when more funding became available.</p>
        <p className="t-paragraph">The design needed to reflect the goals of the product. Simple and easy to use. Casual yet trustworthy. Friendly and approachable.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Sketches</h3>
            <p className="t-paragraph">After listening to the client's vision for the product, sketching allowed us to explore a variety of potential directions for the&nbsp;brand.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
            <Img fluid={data.yoPortfolioSketch1.childImageSharp.fluid} alt="Sketchbook of YoPortfolio brand ideas opened and held in a hand." class="c-case-study__image"/>
            <Img fluid={data.yoPortfolioSketch2.childImageSharp.fluid} alt="YoPortfolio brand sketches." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h3 className="o-columns__half t-heading-4">Brand Design Explorations</h3>
          <p className="t-paragraph">To being designing the brand, I started by sketching out a variety of concepts and potential visual&nbsp;directions.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioBrand1.childImageSharp.fluid} alt="Various YoPortfolio brand explorations with different design styles." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">After arriving at three potential visual directions, I presented those concepts to the&nbsp;client.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioBrand2.childImageSharp.fluid} alt="Screens from a brand presentation for YoPortfolio showing various design explorations." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Final Logo</h3>
            <p className="t-paragraph">With careful consideration we arrived at a final logo and brand for&nbsp;YoPortfolio.</p>
            <p className="t-paragraph">The logomark shows a refference to a pie chart and the "YO" letters of&nbsp;YoPortfolio.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
          <Img fluid={data.yoPortfolioBrand3.childImageSharp.fluid} alt="The final YoPortfolio logo. Icon and wordmark." class="c-case-study__image"/>
          <Img fluid={data.yoPortfolioBrand4.childImageSharp.fluid} alt="Showcase of the fonts and colors of the YoPortfolio brand. Sofia Pro font. Green and blue colors with gradients." class="c-case-study__image"/>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">UI Design</h2>
        <p className="t-paragraph">Now that we had established a visual language, it was time to tackle the interface design.</p>
        <p className="t-paragraph">After wireframes were created, my responsibility was to design a clear, engaging, and easy-to-use interface.</p>
        <p className="t-paragraph">The interface needed to be responsive and work just as well on desktop and mobile displays.</p>
        <p className="t-paragraph">We also wanted to make sure the interface would not be too difficult to build and cause us to go over budget. I used my knowledge of HTML and CSS to design an interface that would be straightforward to build while still focusing on useability.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Element Collage</h3>
            <p className="t-paragraph">Before building an entire site design, I started with an "element collage" that shows various pieces of the UI. This allowed us to get buy-in from the client and showcase how the brand looks when applied to an&nbsp;interface.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
            <Img fluid={data.yoPortfolioUI1.childImageSharp.fluid} alt="Various design elements of YoPortfolio shown on a monitor screen." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">UI Design Process</h3>
            <p className="t-paragraph">The site is a single screen application that shows a graph of a user's portfolio value over time and a listing of their&nbsp;stocks.</p>
            <p className="t-paragraph">The evolution of the UI design shows a move towards simplifying and cleaning up the interface to make YoPortfolio easier to&nbsp;use.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
            <Img fluid={data.yoPortfolioUI2.childImageSharp.fluid} alt="Screenshots of different screens in the YoPortfolio app." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h3 className="o-columns__half t-heading-4">Final UI Design</h3>
          <p className="t-paragraph">We ultimately landed on a split-screen design that allows users to see the chart and their individual stocks at the same time. This improves the interactive experience since users can change data on the right and see its effect on the&nbsp;left.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI5.childImageSharp.fluid} alt="Final design of the YoPortfolio website showing a chart on the left and trade data on the right." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">Being a very interactive web application, special attention was given to the various user flows and different states of the interface. Animation was used to further communicate the user's&nbsp;actions.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI6.childImageSharp.fluid} alt="User interactions within the YoPortfolio website. Showing what happens when a trade is hidden." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">The simplicity of the interface lent itself well to mobile displays. The chart displays above the individual&nbsp;stocks.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI7.childImageSharp.fluid} alt="Three mobile sized screens of the YoPortfolio website." class="c-case-study__image"/>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Launch</h2>
        <p className="t-paragraph">Yoportfolio launched as a well constructed, beautiful, and fully functional application. The client was very happy and was able to use the site to test his concept with real users and get buy-in for more funding.</p>
      </div>
    </div>
    </Layout>
  )
}

export default YoPortfolio
