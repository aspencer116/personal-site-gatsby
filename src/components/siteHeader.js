import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Link } from "gatsby"

const MenuIcon = () => (
  <svg className="c-site-header__menu-icon" width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="0.75" x2="40" y2="0.75" stroke="currentColor" strokeWidth="1.5" />
    <line y1="9.25" x2="40" y2="9.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const CloseIcon = () => (
  <svg className="c-site-header__menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2L2 18" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2 2L18 18" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
  </svg>

)

const SiteHeader = ({ lightVersion }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className={lightVersion ? 'c-site-header c-site-header--light' : 'c-site-header'}>
        <div className="c-site-header__inner g-12-grid">
          <Link
            to="/"
            className="c-site-header__logo"
          >
            <svg className="c-site-header__logo-icon g-col-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 47.87">
              <path style={{ fill: `var(--c-logo-color, white` }} d="M4.45 47.85H0l17.2-39.2h4.46l-17.2 39.2z" />
              <path style={{ fill: `var(--c-logo-color, white` }} d="M34.1 32.68A17.05 17.05 0 0147.8 1.45L46.18 5.2a13 13 0 00-10.42 23.74z" />
              <path style={{ fill: `var(--c-logo-color, white` }} d="M52 30.82a17 17 0 01-32.54 7.1H13.3l1.78-4.08h7.2l.48 1.36a13 13 0 1017.42-16.24l1.64-3.75A17.07 17.07 0 0152 30.83z" />
            </svg>

            <span className="t-body g-col-6 g-col-3@md g-col-2@lg">Andrew Spencer</span>
          </Link>


          <span className="c-site-header__subtitle t-body t-subtle g-col-6">Product Designer &amp; Photographer</span>

          <button
            className="c-site-header__menu g-col-1 g-start-12"
            type="button"
            onClick={toggleMenu}
          >
            <span className="c-site-header__menu-label">Menu</span>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className={`c-nav-overlay ${menuOpen ? 'c-nav-overlay--open' : ''}`} onClick={toggleMenu}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="c-nav-overlay__inner" onClick={(e) => e.stopPropagation()}>
          <nav className="c-nav-overlay__nav">
            <ul className="c-nav-overlay__list o-delist">
              <li className="c-nav-overlay__item">
                <Link to="/" className="c-nav-overlay__link c-button c-button--ghost">About</Link>
              </li>
              <li className="c-nav-overlay__item">
                <Link to="/" className="c-nav-overlay__link c-button c-button--ghost">Design<sup className="t-micro">6</sup></Link>
              </li>
              <li className="c-nav-overlay__item">
                <Link to="/" className="c-nav-overlay__link c-button c-button--ghost">Photos<sup className="t-micro">6</sup></Link>
              </li>
              <li className="c-nav-overlay__item">
                <Link to="/" className="c-nav-overlay__link c-button c-button--ghost">Ideas<sup className="t-micro">8</sup></Link>
              </li>
              <li className="c-nav-overlay__item">
                <a href="mailto:connect@andrew-spencer.com" className="c-button">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="c-nav-overlay__secondary">
            <Link to="/" className="c-button c-button--ghost c-button--just-icon">
              <svg className="c-site-header__logo-icon g-col-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 47.87">
                <path style={{ fill: `currentColor` }} d="M4.45 47.85H0l17.2-39.2h4.46l-17.2 39.2z" />
                <path style={{ fill: `currentColor` }} d="M34.1 32.68A17.05 17.05 0 0147.8 1.45L46.18 5.2a13 13 0 00-10.42 23.74z" />
                <path style={{ fill: `currentColor` }} d="M52 30.82a17 17 0 01-32.54 7.1H13.3l1.78-4.08h7.2l.48 1.36a13 13 0 1017.42-16.24l1.64-3.75A17.07 17.07 0 0152 30.83z" />
              </svg>
            </Link>

            <button
              className="c-button c-button--ghost c-button--just-icon"
              type="button"
              onClick={toggleMenu}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

SiteHeader.propTypes = {
  lightVersion: PropTypes.bool,
}

SiteHeader.defaultProps = {
  lightVersion: false,
}

export default SiteHeader
