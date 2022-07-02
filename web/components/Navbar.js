import React, {useState} from 'react'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from 'next/link'

const Navbar = ({navItems}) => {
    /* set consts */
    const [nav, setNav] = useState(false);

    /* Handle Events */
    const handleClick = () => setNav(!nav);

        return (
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

                <button className="lg:hidden z-10" onClick={handleClick}>
                    { nav ? (<FaTimes className='h-10 w-10' />) : (<FaBars className='h-10 w-10' />) }
                </button>

                {/* Mobile Menu */}
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
            </nav>
        )
}

export default Navbar