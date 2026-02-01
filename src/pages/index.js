import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/home/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
