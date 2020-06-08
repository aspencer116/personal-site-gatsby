/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import SiteHeader from "./siteHeader"
import SiteFooter from "./siteFooter"
import "./layout.css"

const Layout = ({ children, lightVersion }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="c-unsupported-message">
        This browser is not supported for this site. You can still view the site but there will not be any CSS styles.
      </div>
      <SiteHeader/>

      <main>{children}</main>

      <SiteFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lightVersion: PropTypes.bool
}

export default Layout
