import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import {NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import React from 'react'

import client from '../../client'
import Layout from '../../components/Layout'
import RenderSections from '../../components/RenderSections'
import Posts from '../../components/sections/Posts'

export const getServerSideProps = async ({params}) => {

  const data = await client.fetch(groq`
    *[_type == "post"] {
      _id,
      title,
      subtitle,
      slug,
      summary,
      body,
      image {
        asset-> {
          url,
        },
      },
      author-> {
        name,
        gravatar,
      },
      categories,
    }
  `)
  return {
      props: {
        posts: data,
      }
    }
}

const builder = imageUrlBuilder(client)

const LandingPage = (props) => {
  const {
    title = 'Technical Property Latest News and snippets',
    description,
    disallowRobots,
    openGraphImage,
    content = [],
    config = {},
    slug,
  } = props

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : []

  return (
    <Layout config={config}>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      <Posts posts={props.posts} />
      {content && <RenderSections sections={content} />}
    </Layout>
  )
}

LandingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  disallowRobots: PropTypes.bool,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  posts: PropTypes.array,
}

export default LandingPage
