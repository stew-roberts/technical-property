import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

function Figure({node}) {
  const {alt, caption, asset} = node
  if (!asset) {
    return undefined
  }
  return (
    <figure className="">
      <img
        src={builder.image(asset).auto('format').width(2000).url()}
        className=""
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div className="">
            <div className="">
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  )
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
}
export default Figure
