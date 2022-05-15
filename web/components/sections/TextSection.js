import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    
      <section className="sm:w-full md:w-3/5 mx-auto">
        {/* <div className="">{label}</div> */}
        <h2 className="my-12 font-bold text-3xl">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
