import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const {heading, backgroundImage, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  return (
    <div>
      <div className="h-96" style={style}>
        <div className="">
          {ctas && (
            <div className="">
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bg-black py-12 text-white">
        <div className="sm:w-fuil md:w-3/5 mx-auto px-4">
          <h1 className="text-4xl tracking-wide">{heading}</h1>
          <div className="tracking-wide">{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        </div>
      
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
