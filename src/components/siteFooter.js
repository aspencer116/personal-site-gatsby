import React from "react"

import { Link } from "gatsby"
import SiteFooterLink from "./siteFooterLink"

const SiteHeader = () => (
  <footer className="c-site-footer">
    <ul className="c-site-footer__primary">
      <li className="c-site-footer__category">
        <h2 className="t-heading-5 t-heading-5--reverse">About</h2>
        <ul className="c-site-footer__list">

          <SiteFooterLink linkText="Resume" linkPath="/files/AndrewSpencer_resume.pdf" newTab />

          <SiteFooterLink linkText="Contact" linkPath="mailto:aspencer.hello@gmail.com" />
        </ul>
      </li>

      <li className="c-site-footer__category c-site-footer__category--alt">
        <h2 className="t-heading-5 t-heading-5--reverse">Code Bits & Design Tinkering</h2>
        <ul className="c-site-footer__list">

          <SiteFooterLink linkText="Hyperloop Map" linkPath="https://dribbble.com/shots/4712665-Hyperloop-Map-Dark-Mode" newTab />

          <SiteFooterLink linkText="Realistic Shadow Button" linkPath="https://codepen.io/iam_aspencer/pen/xXQbvK" newTab />

          <SiteFooterLink linkText="Website Inception Effect" linkPath="https://codepen.io/iam_aspencer/pen/ePmmeV" newTab />

          <SiteFooterLink linkText="Bezier Curve Style Library" linkPath="https://codepen.io/iam_aspencer/pen/ZeQvGW" newTab />

          <SiteFooterLink linkText="Christmas Tree Farm Brand" linkPath="https://dribbble.com/shots/9068185-Christmas-Tree-Brand" newTab />
        </ul>
      </li>
    </ul>
    <div className="c-site-footer__secondary">
      <ul className="c-site-footer__social-list">
        <li className="c-site-footer__social-list-item">
          <a className="c-site-footer__social-link" href="https://dribbble.com/iam_aspencer" target="_blank" rel="noopener noreferrer">
            <svg className="c-site-footer__social-link--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.41 58.4">
              <path fill="#a7c5b4" d="M29.2 0a29.2 29.2 0 1 0 29.21 29.2A29.23 29.23 0 0 0 29.2 0zM49 14a24.7 24.7 0 0 1 5.2 14.74 48.4 48.4 0 0 0-17.76-1.06c-.53-1.29-1.07-2.52-1.61-3.7A34.28 34.28 0 0 0 49 14zM29.2 4.25a24.85 24.85 0 0 1 16.28 6.06 29.48 29.48 0 0 1-12.9 9.14A97.42 97.42 0 0 0 23.32 5a24.22 24.22 0 0 1 5.88-.75zM18.39 6.71A96.34 96.34 0 0 1 27.77 21C21.47 22.67 13.9 23.39 5 23.18A25.06 25.06 0 0 1 18.39 6.71zM4.25 29.2v-1q1.86.06 3.66.06A81.1 81.1 0 0 0 30 25.56c.47 1 .93 2 1.39 3.13-7.57 2.14-15.24 7-20.91 17A24.84 24.84 0 0 1 4.25 29.2zm25 25a24.83 24.83 0 0 1-14.89-4.94c2.8-5.18 8.59-13 18.95-15.94A162.51 162.51 0 0 1 39 52.17a25 25 0 0 1-9.8 1.98zm14.28-4.51a162.57 162.57 0 0 0-5.31-17.39 41.09 41.09 0 0 1 15.51 1.45 24.83 24.83 0 0 1-10.25 15.89z"/>
            </svg>
            <span className="c-site-footer__social-link--text">Dribbble</span>
          </a>
        </li>
        <li className="c-site-footer__social-list-item">
          <a className="c-site-footer__social-link" href="https://codepen.io/iam_aspencer/" target="_blank" rel="noopener noreferrer">
            <svg className="c-site-footer__social-link--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path d="M58.9 40.2c0-.1.1-.2.1-.3v-.1c0-.1.1-.3.1-.5V20.7c0-.2 0-.3-.1-.5v-.1c0-.1-.1-.2-.1-.3 0 0 0-.1-.1-.1-.1-.1-.1-.2-.2-.3l-.1-.1-.3-.3L31.2.4c-.1-.1-.3-.2-.5-.2h-.1c-.2-.2-.4-.2-.6-.2-.2 0-.4 0-.5.1h-.1c-.2.1-.3.1-.5.2L1.8 19l-.3.3-.1.1c-.1.1-.1.2-.2.3l-.1.1c0 .1-.1.2-.1.3v.1c0 .1-.1.3-.1.5v18.7c0 .2 0 .3.1.5v.1c0 .1.1.2.1.3 0 0 0 .1.1.1.1.1.1.2.2.3l.1.1.3.3 27 18.6c.1.1.3.2.5.2h.1c.2 0 .3.1.5.1s.4 0 .5-.1h.1c.2-.1.3-.1.5-.2l27-18.6.3-.3.1-.1c.1-.1.1-.2.2-.3.2-.1.2-.2.3-.2zM55 35.5L47.1 30l7.9-5.5v11zm-11.5-8L32 19.6V5.9l21.5 14.8-10 6.8zM30 36.9L20 30l10-6.9L40 30l-10 6.9zm-2-31v13.7l-11.5 7.9-10-6.9L28 5.9zM5 24.5l7.9 5.5L5 35.5v-11zm11.5 8L28 40.4v13.7L6.5 39.3l10-6.8zM32 54.1V40.4l11.5-7.9 10 6.9L32 54.1z"/>
            </svg>
            <span className="c-site-footer__social-link--text">Codepen</span>
          </a>
        </li>
        <li className="c-site-footer__social-list-item">
          <a className="c-site-footer__social-link" href="https://github.com/aspencer116" target="_blank" rel="noopener noreferrer">
            <svg className="c-site-footer__social-link--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path d="M60 30c0 14.3-10 26.2-23.4 29.2V47.8c0-3.1-.4-5.2-.4-5.2 19.9-4.6 14-21.1 10-24.5 1.3-2.8 1.2-6.3-.5-8.6-1.2 0-5.7.1-8.8 4-7-2.9-14.6 0-14.6 0-3.5-4.2-8.8-4-8.8-4s-3.1 5-.2 8.6c-1.6 1.6-4.2 3.1-4.2 10.6s8.2 14.1 14.4 14.1c-.6.6-.9 2.3-.9 3.9-2.2 1-6.8.7-8.7-2.4-1.9-3.1-4.2-3.1-5.3-3.1-1.1-.1-2 .1.7 2.2 2.8 2.1 2 4.2 5.1 6.6 4.8 3.1 8.3 1.2 8.3 1.2v8C9.8 56 0 44.2 0 30 0 13.4 13.4 0 30 0s30 13.4 30 30z" fill="#a7c5b4"/>
            </svg>
            <span className="c-site-footer__social-link--text">GitHub</span>
          </a>
        </li>
        <li className="c-site-footer__social-list-item">
          <a className="c-site-footer__social-link" href="https://www.instagram.com/iam_aspencer/" target="_blank" rel="noopener noreferrer">
            <svg className="c-site-footer__social-link--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.18 57.18">
              <path fill="#a7c5b4" d="M42.44 57.18H14.75A14.76 14.76 0 0 1 0 42.44V14.75A14.77 14.77 0 0 1 14.75 0h27.69a14.76 14.76 0 0 1 14.74 14.75v27.69a14.75 14.75 0 0 1-14.74 14.74zM14.75 4.6A10.16 10.16 0 0 0 4.6 14.75v27.69a10.16 10.16 0 0 0 10.15 10.14h27.69a10.15 10.15 0 0 0 10.14-10.14V14.75A10.16 10.16 0 0 0 42.44 4.6z"/>
              <path fill="#a7c5b4" d="M28.59 42.56a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-23.33A9.37 9.37 0 1 0 38 28.59a9.37 9.37 0 0 0-9.41-9.36z"/>
              <rect fill="#a7c5b4" x="41.08" y="9.2" width="6.24" height="6.24" rx="3.12" ry="3.12"/>
            </svg>
            <span className="c-site-footer__social-link--text">Instagram</span>
          </a>
        </li>
        <li className="c-site-footer__social-list-item">
          <a className="c-site-footer__social-link" href="https://unsplash.com/@iam_aspencer" target="_blank" rel="noopener noreferrer">
            <svg className="c-site-footer__social-link--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.18 49.34">
              <path fill="#a7c5b4" d="M49.24 7.82H43l-1.87-4.24A6 6 0 0 0 35.61 0h-14a6.06 6.06 0 0 0-5.52 3.58l-1.91 4.24H8a8 8 0 0 0-7.95 8v25.57a8 8 0 0 0 8 8h41.19a7.94 7.94 0 0 0 7.94-8V15.77a7.94 7.94 0 0 0-7.94-7.95zM28.6 41.7a13.12 13.12 0 1 1 13.11-13.12A13.12 13.12 0 0 1 28.6 41.7zm8.07-13.12a8.08 8.08 0 1 1-8.07-8.08 8.07 8.07 0 0 1 8.07 8.08z"/>
            </svg>
            <span className="c-site-footer__social-link--text">Unsplash</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="c-site-footer__tertiary">
      <span className="c-site-footer__meta">
        Designed and built by Andrew Spencer ©{new Date().getFullYear()}.
      </span>
      <span className="c-site-footer__meta">
        Always a work in progress. Designed in <a className="c-site-footer__meta-link" href="https://www.figma.com">Figma</a>. Built with <a className="c-site-footer__meta-link" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>. See the <Link className="c-site-footer__meta-link" to="/pattern-library/">pattern library</Link> and <a className="c-site-footer__meta-link" href="https://github.com/aspencer116/personal-site-gatsby" target="_blank" rel="noopener noreferrer">GitHub repo</a>.
      </span>
    </div>
  </footer>
)

export default SiteHeader
