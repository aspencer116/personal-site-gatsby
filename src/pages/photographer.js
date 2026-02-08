import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const PhotographerPage = () => (
  <Layout lightVersion={true}>
    <Helmet>
      <script src={withPrefix('js/safe-focus.js')} type="text/javascript" />
    </Helmet>
    <SEO title="Home" />

    <p>Hello world</p>

  </Layout>
)

export default PhotographerPage
