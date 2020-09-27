import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Helmet from "react-helmet"
import CaseStudyHeader from "../../components/case-study/caseStudyHeader"
import { withPrefix } from "gatsby"

const YoPortfolio = () => (
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

    <p>Testing</p>
  </Layout>
)

export default YoPortfolio
