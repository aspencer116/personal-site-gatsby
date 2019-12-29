import PropTypes from "prop-types"
import React from "react"

const Color = ({ colorName }) => (
  <li className="c-color-block" style={{ color: `var(--c-` + colorName + `)`}}>
    <span className="c-color-block__name">{colorName}</span>
    <span className="c-color-block__variable">var(--c-{colorName})</span>
  </li>
)

Color.propTypes = {
  colorName: PropTypes.string,
}

Color.defaultProps = {
  colorName: ``,
}

export default Color
