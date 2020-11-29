import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Helmet from "react-helmet"
import CaseStudyHeaderShoesForCrews from "../../components/case-study/CaseStudyHeaderShoesForCrews"
import { withPrefix } from "gatsby"

import Img from "gatsby-image"

const ShoesForCrews = () => {
  const data = useStaticQuery(graphql`
    query {
      existingDesign1: file(relativePath: { eq: "shoes-for-crews/existing-design_1.jpg" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      existingDesign2: file(relativePath: { eq: "shoes-for-crews/existing-design_2.jpg" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      brandDiagram: file(relativePath: { eq: "shoes-for-crews/brand-diagram.png" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      Mozo1: file(relativePath: { eq: "shoes-for-crews/Mozo_1.jpg" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      Mozo2: file(relativePath: { eq: "shoes-for-crews/Mozo_2.jpg" }) {
        childImageSharp {fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }}
      },
      Mozo3: file(relativePath: { eq: "shoes-for-crews/Mozo_3.jpg" }) {
        childImageSharp {fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }}
      },
      Mozo4: file(relativePath: { eq: "shoes-for-crews/Mozo_4.png" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      SFC1: file(relativePath: { eq: "shoes-for-crews/SFC_1.jpg" }) {
        childImageSharp {fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }}
      },
      SFC2: file(relativePath: { eq: "shoes-for-crews/SFC_2.jpg" }) {
        childImageSharp {fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }}
      },
      SFC3: file(relativePath: { eq: "shoes-for-crews/SFC_3.jpg" }) {
        childImageSharp {fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }}
      },
    }
  `)

  return (
    <Layout lightVersion={true}>
      <Helmet>
          <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Shoes for Crews Case Study" />

      <CaseStudyHeaderShoesForCrews
        title="Shoes For Crews"
        subtitle="A leader in slip resistant footwear needed a website overhaul to support multiple brands and a cohesive desktop to mobile&nbsp;experience."
        tags={["Web Design", "Frontend Dev", "E-commerce"]}
        year="2016"
        imageAltText="Screenshots of the Shoes For Crews website on a swirly colored background."
      />

    <div className="c-case-study">
      <div className="o-text-width-limiter c-case-study__section">
        <p className="t-paragraph">Shoes For Crews, a leader in slip resistant footwear for the service, healthcare, and manufacturing industries was in the midst of redesigning their brand and repositioning their website. As a member of the team at Sparkbox, a web agency, I helped Shoes For Crews design and build a new website that incorporated multiple sub-brands and a mobile friendly&nbsp;approach.</p>
        <h2 className="t-heading-2">Challenges</h2>
        <p className="t-paragraph">The goal of the project was to redesign and build a website that used the new Shoes For Crews brand along with custom themed sub-brands—all in a few months. No small task for a large website with hundreds of&nbsp;products.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="t-heading-4">Existing Site</h3>
            <p className="t-paragraph">The existing site was not responsive and used an outdated brand design. To better serve customers, the new site needed to work just as well on mobile devices as desktop. It also needed to account for the many different brands of shoes being sold on the same&nbsp;site.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <figure>
            <Img fluid={data.existingDesign1.childImageSharp.fluid} alt="A screenshot of the Shoes For Crews website homepage before this project. The brand is older looking and the site is not responsive." class="c-case-study__image"/>
            <Img fluid={data.existingDesign2.childImageSharp.fluid} alt="A screenshot of the Shoes For Crews website product page before this project. The layout is cluttered with lots of content." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">The existing Shoes For Crews website before the project started.</figcaption>
          </figure>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Mozo Sub-Brand Design</h2>
        <p className="t-paragraph">With the help of Sparkbox’s Creative Director, Jeremy, I designed the website using Mozo, one of the sub-brands, as the foundation. This was done to allow time for another agency to redesign the Shoes for Crews brand while development started on the new&nbsp;site.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div>
            <p className="t-paragraph">Mozo’s brand character was bold and edgy when compared to the corporate feel of Shoes For Crews. To support both brands living on the same site, we intentionally designed each page as a template which could support unique brand experiences through the use of different fonts, colors, and image styles. This ensured that each brand would have a consistent layout, making it easier for customers to navigate since individual UI elements would be in the same location across&nbsp;brands.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <Img fluid={data.brandDiagram.childImageSharp.fluid} alt="Screenshots of the existing PicSnippets website." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div>
            <h3 className="t-heading-4">Design Explorations</h3>
            <p className="t-paragraph">I started designing the product page first due to its importance and overall complexity. This provided the perfect opportunity to test various color, typography, and layout concepts. Although I was designing with the Mozo brand, I kept in mind that  the layout and structure would eventually be used for the main Shoes For Crews brand so I made sure elements were flexible and allowed for easy&nbsp;customization.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <figure>
            <Img fluid={data.Mozo1.childImageSharp.fluid} alt="Screenshots of various designs for the product display area of the Mozo branded website. Shows an image of a shoe on the left and details about it on the right." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">Early design iterations of the product area for Mozo shoes.</figcaption>
          </figure>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">The marketing team at Shoes For Crews was eager to include more storytelling elements in the website so we incorporated content blocks for highlighting features of each shoe in a way that was flexible yet rigid enough to not distract from the experience. It was important to balance storytelling with the need for a fast and responsive&nbsp;experience.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.Mozo2.childImageSharp.fluid} alt="Screenshots of the final design for the product page of Mozo shoes." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div>
            <p className="t-paragraph">We used Sketch symbols to manage variations and states of buttons, form fields, and other common elements. This made it easier for developers to see all of the variations of components at a glance and translated well to the pattern library we ended up building alongside the&nbsp;site.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <Img fluid={data.Mozo4.childImageSharp.fluid} alt="A grid of buttons in the Mozo brand design. Showing different variations and states like hover and clicked." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__full-width-image">
          <figure>
            <Img fluid={data.Mozo3.childImageSharp.fluid} alt="Screenshots of the design for the listing page of Mozo shoes. Shoes a grid of shoes in a white and black design with bold red and orange colors." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">Mozo listing page.</figcaption>
          </figure>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h2 className="t-heading-2">Shoes For Crews Design</h2>
          <p className="t-paragraph">As we wrapped up work on the Mozo brand, the Shoes For Crews redesign effort had finished and we were able to take the new brand and use it to design the new site. The Shoes For Crews product page retained the same layout as Mozo but has a very different look and feel thanks to color and typography&nbsp;changes.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.SFC1.childImageSharp.fluid} alt="Screenshots of the design for the listing page of Mozo shoes. Shoes a grid of shoes in a white and black design with bold red and orange colors." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="t-heading-4">Homepage</h3>
            <p className="t-paragraph">The homepage serves as an example of how we balanced the storytelling features requested by the Shoes For Crews marketing team with the need for a fast, easy to navigate website. It incorporates category links and large product images with feature&nbsp;callouts.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <Img fluid={data.SFC2.childImageSharp.fluid} alt="Screenshot of the full Shoes For Crews product page showing different sections including images of the shoe, pricing, features, and reviews." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">Since the existing site was not responsive, the mobile experience of the website proved to be a huge value add which helped capture many new customers. It was important that the mobile experience be just as easy to navigate as the&nbsp;desktop.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.SFC3.childImageSharp.fluid} alt="Screenshots of the design for the listing page of Mozo shoes. Shoes a grid of shoes in a white and black design with bold red and orange colors." class="c-case-study__image"/>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Development</h2>
        <p className="t-paragraph">Once we had a design direction for the new site, it was time to start building. I helped the Sparkbox team build the frontend of the new site. By being able to jump in and prototype complex pieces of the design in CodePen we were able to quickly validate ideas before building components in production&nbsp;code.</p>
        <p className="t-paragraph">I was also able to contribute my knowledge of HTML and CSS best practices, accessibility, and animation to help build the best website possible for Shoes For Crews. Thanks to the great work of everyone on the team, we were able to launch a comprehensive Shoes For Crews website with multi-brand support that was responsive, fast, and easy to&nbsp;navigate.</p>
      </div>

    </div>
    </Layout>
  )
}

export default ShoesForCrews
