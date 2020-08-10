import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import HomepageHero from "../components/homepageHero"
import CaseStudyLinks from "../components/home/caseStudyLinks"
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

    <CaseStudyLinks/>

    <p style={{textAlign: 'center', padding: '8rem 1rem 4rem'}}><span aria-label="Construction fence emoji" role="img">🚧</span><br/><br/>This site is a work in progress. Case studies and more coming soon.</p>

    <p style={{textAlign: 'center', padding: '4rem 1rem 8rem'}}>Currently a Frontend Designer at <a style={{color: '#000000'}} href="https://seesparkbox.com">Sparkbox</a>.</p>

    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
