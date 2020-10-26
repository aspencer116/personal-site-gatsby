import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Helmet from "react-helmet"
import CaseStudyHeaderPicSnippets from "../../components/case-study/caseStudyHeaderPicSnippets"
import { withPrefix } from "gatsby"

import Img from "gatsby-image"

const PicSnippets = () => {
  const data = useStaticQuery(graphql`
    query {
      existingProduct1: file(relativePath: { eq: "picsnippets/existing-product_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      existingProduct2: file(relativePath: { eq: "picsnippets/existing-product_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      moodboards: file(relativePath: { eq: "picsnippets/moodboards.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }
        }
      },
      styleguide: file(relativePath: { eq: "picsnippets/style-guide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }
        }
      },
      marketingSite1: file(relativePath: { eq: "picsnippets/marketing-site_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      marketingSite2: file(relativePath: { eq: "picsnippets/marketing-site_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      product1: file(relativePath: { eq: "picsnippets/product_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid }
        }
      },
      product2: file(relativePath: { eq: "picsnippets/product_2-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }
        }
      },
      product3: file(relativePath: { eq: "picsnippets/product_3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) { ...GatsbyImageSharpFluid }
        }
      },
    }
  `)

  return (
    <Layout lightVersion={true}>
      <Helmet>
          <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
      </Helmet>
      <SEO title="PicSnippets Case Study" />

      <CaseStudyHeaderPicSnippets
        title="PicSnippets"
        subtitle="A growing digital product needed a marketing site and product redesign to take them to the next level."
        tags={["Web Design", "Product Design"]}
        year="2019"
        imageAltText="PicSnippets product on a woman's laptop in a coffee shop setting."
      />

    <div className="c-case-study">
      <div className="o-text-width-limiter c-case-study__section">
        <p className="t-paragraph">The team at PicSnippets had created a powerful tool for personalized marketing and sales. The product allowed users to add custom text to images on the web where the text would change dynamically for everyone who viewed the image. For example, an event invite could have the name of the guest in the image. To take PicSnippets to the next level, they were looking to redesign their marketing site and product with a more engaging brand that balanced professional with&nbsp;fun.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Existing Product</h3>
            <p className="t-paragraph">The current design focused on functionality over brand experience and lacked some personality. There were also some reports from users that the UI of the product was confusing.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <figure>
            <Img fluid={data.existingProduct1.childImageSharp.fluid} alt="Screenshots of the existing PicSnippets website." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">The existing PicSnippets marketing website.</figcaption>
          </figure>
          <figure>
            <Img fluid={data.existingProduct2.childImageSharp.fluid} alt="Screenshots of the existing PicSnippets product." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">The existing PicSnippets product.</figcaption>
          </figure>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h2 className="t-heading-2">Brand Design</h2>
          <p className="t-paragraph">I began the redesign effort by exploring the brand language for PicSnippets. I asked questions around what the client wanted PicSnippets to represent and the emotions that users should feel when interacting with it. Words like friendly, bright, welcoming, and easy-to-use came up often. I boiled these ideas down into three mood boards that represented directions the brand could&nbsp;go.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.moodboards.childImageSharp.fluid} alt="Moodboards for the PicSnippets rebrand." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">After consulting with the PicSnippets team, we chose a direction that met their vision and I got to work applying the new&nbsp;design.</p>
          <h2 className="t-heading-2">Marketing Site</h2>
          <p className="t-paragraph">To get a better grasp on how this new visual direction would play out, I began redesigning the marketing site using the existing content but reenergizing it with a more fun and approachable brand. It was clear from the beginning that bright colors and patterns would play an important role in drawing attention to the brand.</p>
          <p className="t-paragraph">As with any project, defining typography and colors was important to ensure consistency between the product and marketing site.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.styleguide.childImageSharp.fluid} alt="Various colors, text styles, and icons for the new PicSnippets brand arranged as a brand guide." class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <p className="t-paragraph">The new design direction took shape as I applied it to various pages and elements on the marketing site. This included a new homepage to explain what PicSnippets is and how it helps customers along with a pricing page and checkout flow.</p>
          </div>
        </div>
        <div className="c-case-study__image-container c-case-study__image-container--with-caption">
          <figure>
            <Img fluid={data.marketingSite1.childImageSharp.fluid} alt="Screenshots of the new home and pricing pages of the PicSnippets marketing website." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">The new home and pricing pages of the PicSnippets marketing&nbsp;website.</figcaption>
          </figure>
          <figure>
            <Img fluid={data.marketingSite2.childImageSharp.fluid} alt="Screenshots of the new PicSnippets marketing website how it works page and subscription signup pages." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">The new "how it works" page and subscription signup&nbsp;pages.</figcaption>
          </figure>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <p className="t-paragraph">To add more visual interest and help tell the story of what PicSnippets does, I created a looping video graphic for the&nbsp;homepage.</p>
          </div>
        </div>
        <div className="c-case-study__image-container">
          <video class="c-case-study__video" width="100%" height="auto" loop autoplay muted controls>
            <source src={'/images/picsnippets_homepage-graphic-loop.mp4'} type="video/mp4"/>
            <track src="picsnippets_homepage-graphic-loop.vtt" kind="subtitles" srclang="en" label="English"/>
            Sorry, your browser does not support this video file.
          </video>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Product Design</h2>
        <p className="t-paragraph">Determining how to take the friendly and energetic brand design and apply it to the PicSnippets product in a way that was still easy to use proved to be a big challenge. It was important to the client that the experience of creating a “PicSnippet” should feel fun, so we keep the same visual feel from the marketing site while toning it down a little to help make the product easier to&nbsp;use.</p>
        <p className="t-paragraph">While this was mostly a re-skinning of the existing product design, we did make some UI changes to improve the user&nbsp;experience.</p>
      </div>

      <div className="c-case-study__section c-case-study__section--2-column">
        <div className="c-case-study__caption">
          <div className="c-case-study__sticky-text">
            <h3 className="o-columns__half t-heading-4">Login and Dashboard</h3>
            <p className="t-paragraph">From the login and dashboard screens, the PicSnippets design seamlessly carries the same brand experience as the marketing&nbsp;site. </p>
          </div>
        </div>
        <div className="c-case-study__image-container">
          <Img fluid={data.product1.childImageSharp.fluid} alt="The new PicSnippets login and dashboard design" class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <h3 className="o-columns__half t-heading-4">Editor</h3>
          <p className="t-paragraph">The editor is the most complex screen in the product and the one that needed the most UX re-working. With valuable feedback from the client on what users found confusing, we were able to restructure it in a way that made more sense and added some new&nbsp;features.</p>
          <p className="t-paragraph">The page became a full-screen canvas for setting up an image and text. The buttons on the left made it easy to find and add images or text “snippets” while the horizontal bar at the top contained all of the&nbsp;controls.</p>
        </div>
        <div className="c-case-study__full-width-image">
          <Img fluid={data.product2.childImageSharp.fluid} alt="The new PicSnippets editor design" class="c-case-study__image"/>
        </div>
      </div>

      <div className="c-case-study__section c-case-study__section--full-width-image">
        <div className="c-case-study__caption">
          <p className="t-paragraph">As part of the redesign, I built a prototype using InVision to communicate the user flow with the client and validate ideas. I also designed various states for components to aid developers.</p>
        </div>
        <div className="c-case-study__full-width-image c-case-study__image-container--with-caption">
          <figure>
            <Img fluid={data.product3.childImageSharp.fluid} alt="Screenshots of various screens designed for the PicSnippets product taken with the contenxt of a UI design tool." class="c-case-study__image"/>
            <figcaption className="t-paragraph t-paragraph--small">Various screens designed for the PicSnippets product.</figcaption>
          </figure>
        </div>
      </div>

      <div className="o-text-width-limiter c-case-study__section">
        <h2 className="t-heading-2">Launch</h2>
        <p className="t-paragraph">After a few rounds of iteration to improve the design, the product moved to development and testing where some changes were made to the UI based on user feedback. It was then released to the public where it was met with very positive feedback from new and existing users. The redesign effort paid off and helped the client gain and retain more users than ever before.</p>
      </div>

    </div>
    </Layout>
  )
}

export default PicSnippets
