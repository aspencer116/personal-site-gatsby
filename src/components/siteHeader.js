import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"

const SiteHeader = ({ lightVersion }) => (
  <nav className={lightVersion ? 'c-site-header c-site-header--light' : 'c-site-header'}>
    <div className="o-page-layout c-site-header__inner">
      <Link
        to="/"
        className="c-site-header__logo"
      >
        <svg className="c-site-header__logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 47.87">
          <path style={{fill: `var(--c-logo-color, white`}} d="M4.45 47.85H0l17.2-39.2h4.46l-17.2 39.2z"/>
          <path style={{fill: `var(--c-logo-color, white`}} d="M34.1 32.68A17.05 17.05 0 0147.8 1.45L46.18 5.2a13 13 0 00-10.42 23.74z"/>
          <path style={{fill: `var(--c-logo-color, white`}} d="M52 30.82a17 17 0 01-32.54 7.1H13.3l1.78-4.08h7.2l.48 1.36a13 13 0 1017.42-16.24l1.64-3.75A17.07 17.07 0 0152 30.83z"/>
        </svg>

        <span className="c-site-header__logo-name">Andrew Spencer</span>
      </Link>
      <p>{ lightVersion }</p>
    </div>
  </nav>
)

SiteHeader.propTypes = {
  lightVersion: PropTypes.bool,
}

SiteHeader.defaultProps = {
  lightVersion: false,
}

export default SiteHeader
