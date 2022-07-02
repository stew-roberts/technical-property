import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection(props) {
  const {heading, label, text, image, cta} = props

  if (!image) {
    return null
  }

  return (
    <div className="container flex justify-center mx-auto">
      <figure className="flex flex-col lg:flex-row items-center lg:mt-24">
        <figcaption className="w-full p-4 lg:w-1/2 lg:p-24">
          <div className="flex">
            <div className="text-gray-500">
              <h2 className="uppercase tracking-widest text-gray-500 mb-1 text-xs">{heading}</h2>
              <div className="lg:text-5xl font-medium text-black lg:my-2">{label}</div>
              <div className="lg:border-l lg:border-gray-500 lg:pl-5">
                {text && <SimpleBlockContent blocks={text} />}
              </div>
              <div className=" text-black uppercase text-xs mt-8">
                {cta && cta.route && <Cta {...cta} />} &rarr;
              </div>
            </div>
          </div>
        </figcaption>
        <div className="w-full lg:w-1/2">
        <img
          src={builder.image(image).auto('format').width(2000).url()}
          className="lg:max-h-[30rem] lg:object-cover"
          alt={heading}
        />
        </div>
      </figure>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default ImageSection
