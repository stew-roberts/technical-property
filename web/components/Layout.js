import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {LogoJsonLd} from 'next-seo'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  const {config, children} = props
  
  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {title, mainNavigation, footerNavigation, footerText, footerTextCol1, footerTextCol2, footerTextCol3, footerTextCol4, logo, url, telephone, email} = config
  const logoUrl = logo && logo.asset && logo.asset.url
  

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <div>
        <Header title={title} navItems={mainNavigation} logo={logo} telephone={telephone} email={email} />
        <div className="content">{children}</div>
        <Footer 
          navItems={footerNavigation} 
          text={footerText}
          col1={footerTextCol1}
          col2={footerTextCol2}
          col3={footerTextCol3}
          col4={footerTextCol4} />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    footerTextCol1: PropTypes.string,
    footerTextCol2: PropTypes.arrayOf(PropTypes.object),
    footerTextCol3: PropTypes.arrayOf(PropTypes.object),
    footerTextCol4: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.string,
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
}

export default Layout
