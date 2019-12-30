import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import HomepageHero from "../components/homepageHero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout lightVersion={true}>
    <SEO title="Home" />

    <HomepageHero />

    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
