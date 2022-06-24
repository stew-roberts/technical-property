import React from 'react'
import HamburgerIcon from './icons/Hamburger'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'
import Link from 'next/link'

export const Navbar = (navItems) => {
    const {router} = navItems
    return (
        <nav>
            <ul className="inline-flex">
                {navItems &&
                navItems.map((item) => {
                    const {slug, title, _id} = item
                    const isActive = slugParamToPath(router.query.slug) === slug.current
                    return (
                    <li key={_id} className="mx-3 my-3 mr-6">
                        <Link href={getPathFromSlug(slug.current)}>
                        <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                            {title}
                        </a>
                        </Link>
                    </li>
                    )
                })}
            </ul>
            <button className="" onClick={this.handleMenuToggle}>
                <HamburgerIcon className="" />
            </button>
        </nav>
    )
}
