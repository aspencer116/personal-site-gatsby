import PropTypes from "prop-types"
import React from "react"

const Color = ({ colorName }) => (
  <li className="c-color-block" style={{ color: `var(--` + colorName + `)`}}>
    <span style={{ color: `var(--stone-dark)` }}>{colorName}</span>
  </li>
)

Color.propTypes = {
  colorName: PropTypes.string,
}

Color.defaultProps = {
  colorName: ``,
}

export default Color
