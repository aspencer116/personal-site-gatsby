import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Helmet from "react-helmet"
import { CSSTransition } from 'react-transition-group'
import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotographerPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "hbr/HBR_highlight.png" }) {
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

  const placeholderImage = getImage(data.placeholder)

  return (
    <Layout lightVersion={true}>
      <Helmet>
        <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Photography" />

      <section className="c-homepage-hero g-12-grid mb-xl">
        <CSSTransition
            in={true}
            timeout={3000}
            classNames="transition-homepage-hero__heading"
            appear
          >
          <h1 className="t-editorial c-homepage-hero__heading" aria-label="Hey, I'm Andrew Spencer, a photographer">
            Hey, I'm Andrew Spencer, a&#20;
            <span>
              <span>p</span>
              <span>h</span>
              <span>o</span>
              <span>t</span>
              <span>o</span>
              <span>g</span>
              <span>r</span>
              <span>a</span>
              <span>p</span>
              <span>h</span>
              <span>e</span>
              <span>r</span>
            </span>
          </h1>
        </CSSTransition>
      </section>

      <section className="c-grid-block mb-xl">
        <div className="o-page-layout g-12-grid">
          <CSSTransition
            in={true}
            timeout={5000}
            classNames="transition-homepage-hero__text"
            appear
          >
            <div className="g-col-4@md c-grid-block__text t-subtle">
              <p className="c-homepage-hero__intro">
                Capturing the beauty of the world we live in and the story of your brand.
              </p>

              <div>
                <p className="t-paragraph t-paragraph--small t-paragraph--tight c-homepage-hero__detail">
                  Freelance photographer focused on Small businesses in New England
                </p>
                <ul className="o-delist c-homepage-hero__list t-subtle">
                  <li className="o-delist t-meta c-homepage-hero__list-item">Retail</li>
                  <li className="o-delist t-meta c-homepage-hero__list-item">Real Estate</li>
                  <li className="o-delist t-meta c-homepage-hero__list-item">Hospitality / Food</li>
                  <li className="o-delist t-meta c-homepage-hero__list-item">Travel</li>
                  <li className="o-delist t-meta c-homepage-hero__list-item">Interiors</li>
                  <li className="o-delist t-meta c-homepage-hero__list-item">Product</li>
              </ul>
              </div>
            </div>
          </CSSTransition>

          <div className="g-start-6@md g-col-7@md">
            <GatsbyImage
              image={placeholderImage}
              alt="Bedroom interior at Villa Hygge Hotel with wooden walls and cozy bedding"
              className="c-photo"
            />
          </div>
        </div>
      </section>

      <section className="o-page-layout g-12-grid">
        {/* Row 1 */}
        <div className="g-col-2@md mb-xl">
          <h2 className="t-heading-2">My Work</h2>
          <p className="t-paragraph">
            I prefer to take pictures of things that hold still. The spaces that inspire us, the beautiful world around us, and the things and food that bring joy to the every day.
          </p>
          <p className="t-paragraph">
            I call New England home but have a passion for travel.
          </p>
        </div>
        
        <div className="g-start-4@md g-col-3@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--vertical mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>

        <div className="g-start-8@md g-col-5@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--horizontal mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>

        {/* Row 2 */}
        <div className="g-col-4@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--horizontal mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>

        <div className="g-start-6@md g-col-7@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--horizontal mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>

        {/* Row 3 */}
        <div className="g-start-2@md g-col-5@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--horizontal mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>

        <div className="g-start-8@md g-col-3@md mb-xl">
          <GatsbyImage
            image={placeholderImage}
            alt="Alt text"
            className="c-photo c-photo--vertical mb-md"
          />
          <h3 className="t-heading-3 t-heading-3--reverse">Case Study Title</h3>
          <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
            Category
          </span>
          <span className="t-meta t-heading-6--reverse t-subtle">
            Location
          </span>
        </div>
      </section>

      <section className="o-page-layout g-12-grid">
        <p className="t-callout g-start-2@md g-col-4@md">
          Let's capture your labor of love in the best light,{' '}
          <a href="mailto:connect@andrew-spencer.com">Reach out</a>
        </p>
      </section>
    </Layout>
  )
}

export default PhotographerPage
