import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"

const GridImageBlock = ({
  wrapperClassName,
  image,
  alt,
  imageClassName,
  title,
  category,
  location,
}) => (
  <div className={wrapperClassName}>
    <GatsbyImage image={image} alt={alt} className={imageClassName} />
    <div className="c-grid-block__description">
      <h3 className="t-heading-3 mb-xxs">{title}</h3>
      <span className="t-meta t-heading-6--reverse t-subtle mr-sm">
        {category}
      </span>
      <span className="t-meta t-heading-6--reverse t-subtle">
        {location}
      </span>
    </div>
  </div>
)

GridImageBlock.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

GridImageBlock.defaultProps = {
  imageClassName: undefined,
}

export default GridImageBlock
