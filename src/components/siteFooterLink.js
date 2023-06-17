import React from "react"

const SiteFooterLink = ({linkText, linkPath, newTab}) => (
  <li className="c-site-footer__list-item t-paragraph">
    <a
      href={linkPath}
      className="c-site-footer__link"
      target={newTab ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      { linkText }
      <svg className="c-external-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.44995H8.55V9.99995M8.1 1.89995L0.45 9.54995" stroke="#0B0C0C"/></svg>
    </a>
  </li>
)

export default SiteFooterLink
