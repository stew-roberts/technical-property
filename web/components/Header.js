import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import HamburgerIcon from './icons/Hamburger'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'
import {FaBars, FaTimes} from 'react-icons/fa'
import Navbar from './Navbar'

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
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between px-4 py-2">
           <h1 className="flex flex-col">
             <Link href={'/'}>
               <a title={title}>{this.renderLogo(logo)}</a>
             </Link>
           </h1>
           <nav>
                {/* Main Menu - medium and above */}
                <ul className="hidden lg:flex uppercase text-sm flex-row gap-20">
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

                <button className="lg:hidden z-10 " onClick={this.handleMenuToggle}>
                    { this.state.showNav ? (<FaTimes className='h-10 w-10' />) : (<FaBars className='h-10 w-10' />) }
                </button>

                {/* Mobile Menu */}
                <ul className={!this.state.showNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center'}>
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
            </nav>
        </div>
      </header>

    )
  }
}

export default withRouter(Header)
