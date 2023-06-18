import React from "react"

import { Link } from "gatsby"
import SiteFooterLink from "./siteFooterLink"

const SiteHeader = () => (
  <footer className="c-site-footer">
    <div className="c-site-footer__primary">
      <span className="o-flex">
        <span className="c-site-footer__logo">Andrew Spencer</span>
        <span className="t-paragraph t-meta--small"><a href="mailto:connect@andrew-spencer.com">connect@andrew-spencer.com</a></span>
      </span>
      <ul className="o-delist c-site-footer__list">
        <SiteFooterLink linkText="Dribbble" linkPath="https://dribbble.com/iam_aspencer" newTab />
        <SiteFooterLink linkText="CodePen" linkPath="https://codepen.io/iam_aspencer/" newTab />
        <SiteFooterLink linkText="Instagram" linkPath="https://www.instagram.com/iam_aspencer/" newTab />
        <SiteFooterLink linkText="GitHub" linkPath="https://github.com/aspencer116" newTab />
        <SiteFooterLink linkText="LinkedIn" linkPath="https://www.linkedin.com/in/andrew-spencer/" newTab />
      </ul>
    </div>
    <div className="c-site-footer__secondary">
      <div className="c-site-footer__meta-container">
        <div className="c-site-footer__meta-row">
          <span className="c-site-footer__meta t-meta--small">
            © Andrew Spencer {new Date().getFullYear()}.
          </span>
          <span className="c-site-footer__meta t-meta--small">
            This site is a work in progress <span className="t-micro">(v2.0.1)</span>
          </span>
        </div>
        <div className="c-site-footer__meta-row">
          <span className="c-site-footer__meta t-meta--small">
            Designed in <a className="c-site-footer__meta-link" href="https://www.figma.com" target="_blank">Figma
            <svg className="c-external-icon c-external-icon--small" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.34998H7.65V7.99998M7.3 1.69998L1.35 7.64998"/></svg></a>
          </span>
          <span className="c-site-footer__meta t-meta--small">
            Built with <a className="c-site-footer__meta-link" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby
            <svg className="c-external-icon c-external-icon--small" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.34998H7.65V7.99998M7.3 1.69998L1.35 7.64998"/></svg></a>
          </span>
          <span className="c-site-footer__meta t-meta--small">
            <Link className="c-site-footer__meta-link" to="/pattern-library/">Pattern Lib</Link>
          </span>
          <span className="c-site-footer__meta t-meta--small">
            <a className="c-site-footer__meta-link" href="https://github.com/aspencer116/personal-site-gatsby" target="_blank" rel="noopener noreferrer">
            Repo<svg className="c-external-icon" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.34998H7.65V7.99998M7.3 1.69998L1.35 7.64998"/></svg></a>
          </span>
        </div>
      </div>
      <div className="c-site-footer__pictures">
        <span className="c-site-footer__meta t-meta--small">
          I also take pictures and sometimes <a className="c-site-footer__meta-link" href="https://unsplash.com/@iam_aspencer" target="_blank" rel="noopener noreferrer">share them 
          <svg className="c-external-icon c-external-icon--small" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.34998H7.65V7.99998M7.3 1.69998L1.35 7.64998"/></svg>
          </a>.
        </span>
      </div>
    </div>
  </footer>
)

export default SiteHeader
