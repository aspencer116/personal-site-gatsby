import React from "react"

const SiteFooterLink = ({linkText, linkPath, newTab}) => (
  <li className="c-site-footer__list-item">
    <a
      href={linkPath}
      className="c-site-footer__link"
      target={newTab ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      { linkText }
    </a>
  </li>
)

export default SiteFooterLink
