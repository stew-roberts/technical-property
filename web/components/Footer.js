import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

function Footer(props) {
  const {navItems, text, router} = props
  return (
    <div className="w-full bg-gray-950 text-white">
      <nav>
        <ul className="">
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
      <div className="">
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
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
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default withRouter(Footer)
