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
      yoPortfolioSketch1: file(relativePath: { eq: "yo-portfolio/yo-portfolio_sketch_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioSketch2: file(relativePath: { eq: "yo-portfolio/yo-portfolio_sketch_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioBrand1: file(relativePath: { eq: "yo-portfolio/yo-portfolio_brand_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioBrand2: file(relativePath: { eq: "yo-portfolio/yo-portfolio_brand_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioBrand3: file(relativePath: { eq: "yo-portfolio/yo-portfolio_brand_3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioBrand4: file(relativePath: { eq: "yo-portfolio/yo-portfolio_brand_4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUI1: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUI2: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUI5: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_5.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUI66: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_66.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUIgif: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_gif.gif" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
        }
      },
      yoPortfolioUI7: file(relativePath: { eq: "yo-portfolio/yo-portfolio_UI_7.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid }
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
        subtitle="A startup investment product needed a playful brand and UI design to launch them into the future."
        tags={["Branding", "Product Design", "Animation"]}
        year="2018"
        image="images/casestudy/yo-portfolio_header.jpg"
        imageAltText="Screenshots of the YoPortfolio website"
      />

    <div className="c-case-study">
      <div className="o-text-width-limiter c-case-study__section">
        <p className="t-paragraph">A local entrepreneur came to the team at <a href="https://seesparkbox.com/" target="_blank" rel="noopener noreferrer">Sparkbox</a> with a dream for a new investment product called YoPortfolio. The product would help investors track their trades and know if they were beating the market. His bold vision, mathematical formulas, and quirky name was all we needed to get&nbsp;started!</p>
        <p className="t-paragraph">I served as the brand and product designer for the project and used my understanding of design and development to guide the client in cost-saving decisions that still resulted in a great brand design and MVP&nbsp;product.</p>
        <h2 className="t-heading-2">Brand Design</h2>
        <p className="t-paragraph">To begin, the product needed a brand identity that would attract the target audience of tech-savvy at home investors. It also needed to reflect the vision of YoPortfolio, a simple and easy to understand product that was casual yet trustworthy, friendly and&nbsp;approachable.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Sketches</h3>
            <p className="t-paragraph">After listening to the client's vision for the product, I began by sketching a variety of potential directions for the&nbsp;logo.</p>
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
          <p className="t-paragraph">Explorations were varied and covered a number of visual styles and potential directions for the YoPortfolio&nbsp;brand.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioBrand1.childImageSharp.fluid} alt="Various YoPortfolio brand explorations with different design styles." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">With feedback from Jeremy Loyd, Creative Director at Sparkbox, we arrived at three potential visual directions which I presented to the client for&nbsp;feedback.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioBrand2.childImageSharp.fluid} alt="Screens from a brand presentation for YoPortfolio showing various design explorations." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Final Logo</h3>
            <p className="t-paragraph">In the final logo, a simple icon references a pie chart and the "YO" letters of YoPortfolio. The color palate emphasized the balance between tech and finances found in the product while also being mindful of digital accessibility requirements.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
          <Img fluid={data.yoPortfolioBrand3.childImageSharp.fluid} alt="The final YoPortfolio logo. Icon and wordmark." class="c-case-study__image"/>
          <Img fluid={data.yoPortfolioBrand4.childImageSharp.fluid} alt="Showcase of the fonts and colors of the YoPortfolio brand. Sofia Pro font. Green and blue colors with gradients." class="c-case-study__image"/>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">UI Design</h2>
        <p className="t-paragraph">Now that we had established a visual identity, it was time to apply that identity to the product. After wireframes were created by the team at Sparkbox, my responsibility was to design a clear, engaging, and easy-to-use&nbsp;interface.</p>
        <p className="t-paragraph">To give users flexibility to access YoPortfolio on any device, it was built as a web product, as opposed to a native app. Therefore, the interface needed to be responsive and work just as well on desktop and mobile&nbsp;displays.</p>
        <p className="t-paragraph">It was important that the UI not be too difficult to build and risk putting the project over budget or delaying the launch. I used my knowledge of HTML and CSS to design an interface that would balance users needs with development&nbsp;complexity.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Element Collage</h3>
            <p className="t-paragraph">Before diving into layout design, I created an "element collage" to explore how the brand would look when applied to UI elements. This allowed us to get buy-in from the client on the visual direction before considering the user&nbsp;experience.</p>
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
            <p className="t-paragraph">The single screen product needed to show a graph of the user's portfolio compared to the market and a listing of their&nbsp;stocks.</p>
            <p className="t-paragraph">Over time, the UI evolved to a more simple layout with a focus on colors to tell the story of how a user’s stocks were&nbsp;performing.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
            <Img fluid={data.yoPortfolioUI2.childImageSharp.fluid} alt="Screenshots of different screens in the YoPortfolio app." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h3 className="o-columns__half t-heading-4">Final UI Design</h3>
          <p className="t-paragraph">We ultimately landed on a split-screen design with a chart on the left and a list of stocks on the right. This improved the experience by allowing users to hide and show stocks on the right and see the chart on the left change in&nbsp;response.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI5.childImageSharp.fluid} alt="Final design of the YoPortfolio website showing a chart on the left and trade data on the right." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <p className="t-paragraph">Being a very interactive web application, special attention was given to the various user flows and different states of the product. I was able to jump into the code and help the development team tweak the look of various components. I also designed and built many of the animations that were used to communicate the user's&nbsp;actions.</p>
        </div>
        <div className="c-case-study__image-container">
          <img src={'/images/yo-portfolio_UI_animation.gif'} alt="animated GIF showing an animation for hiding and showing a stock in YoPortfolio." className="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI66.childImageSharp.fluid} alt="User interactions within the YoPortfolio website. Showing what happens when a trade is hidden." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">The simplicity of the interface lent itself well to mobile displays as well with the chart displaying above the individual&nbsp;stocks.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.yoPortfolioUI7.childImageSharp.fluid} alt="Three mobile sized screens of the YoPortfolio website." class="c-case-study__image"/>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Launch</h2>
        <p className="t-paragraph">YoPortfolio launched as a beautiful, and fully functional MVP application! The client was very happy with the end result and was able to onboard new users and get buy-in for more funding and future&nbsp;improvements.</p>
      </div>
    </div>
    </Layout>
  )
}

export default YoPortfolio
