import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import HomepageHero from "../components/homepageHero"
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

    <p Style="text-align: center; padding: 8rem 1rem;">🚧 This site is a work in progress</p>

    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
