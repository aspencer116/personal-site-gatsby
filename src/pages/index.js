import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageIntro from "../components/home/homepageIntro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomepageIntro />
  </Layout>
)

export default IndexPage
