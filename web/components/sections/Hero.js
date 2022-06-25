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
      <div className="sm:h-screen lg:h-[40rem] flex justify-center items-end bg-center" style={style}>
        <div className="container flex justify-center w-1/2 text-white">
          <div>
            <h1 className="text-m tracking-widest uppercase block">{heading}</h1>
            <p className="tracking-wide text-4xl block">{tagline && <SimpleBlockContent blocks={tagline} />}</p>
          </div>
          {ctas && (
            <div className="">
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div>
          )}
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
