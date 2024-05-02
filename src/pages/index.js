import React from "react"

import Layout from "../components/layout"
import HomepageHero from "../components/homepageHero"
// import CurrentWork from "../components/home/currentWork"
// import CaseStudyLinks from "../components/home/caseStudyLinks"
import ModeToggle from "../components/modeToggle"
import Work from "../components/home/work"
import Ideas from "../components/home/ideas"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const IndexPage = () => (
  <Layout lightVersion={true}>
    <Helmet>
        <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
    </Helmet>
    <SEO title="Home" />

    <HomepageHero />

    <ModeToggle />

    {/* <CurrentWork />

    <CaseStudyLinks/> */}

    <Work />

    <Ideas />

    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
