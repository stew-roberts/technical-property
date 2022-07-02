import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function CtaSection(props) {
  const {heading, label, text, cta} = props

  return (
    <div className="flex justify-center mx-auto bg-black mt-4">
      <figure className="container flex flex-row items-center mt-24">
        <figcaption className="w-full text-center lg:text-left lg:p-24">
          <div className="flex">
            <div className="text-gray-200">
              <h2 className="uppercase tracking-widest text-white mb-1 text-xs">{heading}</h2>
              <div className="text-5xl font-medium text-white my-2">{label}</div>
              <div className="text-white">
                {text && <SimpleBlockContent blocks={text} />}
              </div>
              <div className=" text-white uppercase text-xs mt-8 border border-white px-12 py-6 w-44 hover:bg-white hover:text-black cursor-pointer mx-auto lg:mx-0">
                {cta && cta.route && <Cta {...cta} />} &rarr;
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

CtaSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default CtaSection
