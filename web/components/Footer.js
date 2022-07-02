import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

function Footer(props) {
  const {navItems, text, col1, col2, col3, col4, router} = props
  return (
    <footer className="mt-20">
      <div className="w-full bg-black text-white text-center lg:text-left">
        <nav>
          <ul className="flex flex-col lg:flex-row">
            {navItems &&
              navItems.map((item) => {
                const isActive = slugParamToPath(router.query.slug) === item.slug.current
                return (
                  <li key={item._id} className="">
                    <Link href={getPathFromSlug(item.slug.current)}>
                      <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
        <div className="container flex flex-col lg:flex-row justify-center lg:justify-between mx-auto gap-20 mt-12 text-gray-400">
          <div className="flex flex-col">
            <SimpleBlockContent blocks={col1} />
          </div>
          <div className="flex flex-col">
          <nav>
          <ul className="flex flex-col">
            <p><strong>Services</strong></p>
            {col2 &&
              col2.map((item) => {
                const isActive = slugParamToPath(router.query.slug) === item.slug.current
                return (
                  <li key={item._id} className="">
                    <Link href={getPathFromSlug(item.slug.current)}>
                      <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
          </div>
          <div className="flex flex-col">
          <nav>
          <ul className="flex flex-col">
            <p><strong>Quick Links</strong></p>
            {col3 &&
              col3.map((item) => {
                const isActive = slugParamToPath(router.query.slug) === item.slug.current
                return (
                  <li key={item._id} className="">
                    <Link href={getPathFromSlug(item.slug.current)}>
                      <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
          </div>
          <div className="flex flex-col">
            <SimpleBlockContent blocks={col4} />
          </div>
        </div>
        <div className="conatiner flex justify-center py-8 mt-4 border-t border-gray-400">
          <SimpleBlockContent blocks={text} />
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  col1: PropTypes.string,
  col2: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  col3: PropTypes.string,
  col4: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default withRouter(Footer)
