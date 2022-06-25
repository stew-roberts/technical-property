import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    
      <section className="container mx-auto mt-16">
        <div className="flex flex-col">
        <h2 className="block uppercase tracking-widest text-gray-500 mb-1 text-xs">{heading}</h2>
        <div className="text-3xl font-medium text-black my-2">{label}</div>
        {text && <SimpleBlockContent blocks={text} />}
        </div>
      </section>
    
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
