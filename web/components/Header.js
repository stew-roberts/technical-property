import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import HamburgerIcon from './icons/Hamburger'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

class Header extends Component {
  state = {showNav: false}

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string,
      }),
      events: PropTypes.any,
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
      logo: PropTypes.string,
    }),
  }

  componentDidMount() {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount() {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav,
    })
  }

  renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className="" />
    }

    return <img src={logo.asset.url} alt={logo.title} className="h-28 p-2" />
  }

  render() {
    const {title = 'Missing title', navItems, router, logo} = this.props

    return (
      <header>
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
           <h1 className="flex flex-col">
             <Link href={'/'}>
               <a title={title}>{this.renderLogo(logo)}</a>
             </Link>
           </h1>
           
           <nav className>
            <div className="">
            <ul className="uppercase text-sm flex flex-row gap-20">
              {navItems &&
                navItems.map((item) => {
                  const {slug, title, _id} = item
                  const isActive = slugParamToPath(router.query.slug) === slug.current
                  return (
                    <li key={_id} className="">
                      <Link href={getPathFromSlug(slug.current)}>
                        <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive} className="tracking-widest">
                          {title}
                        </a>
                      </Link>
                    </li>
                  )
                })}
            </ul>
            <button className="md:hidden" onClick={this.handleMenuToggle}>
              <HamburgerIcon className="" />
            </button>
            </div>
          </nav>

        </div>
      </header>

    )
  }
}

export default withRouter(Header)
