import React from 'react'
import groq from "groq"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

import Layout from '../../../components/Layout'
import {NewsItem, Author} from "../../../components/sections"

const Post = (props) => {
	const {title,subtitle,body,image,author,categories,config,createdAt} = props
	const urlFor = (source) => imageUrlBuilder(client).image(source)
	const style = image.asset._ref
	? {
		backgroundImage: `url("${urlFor(image.asset._ref).width(2000).auto('format').url()}")`,
	}
	: {}

	return (
	<Layout config={config}>
		<div>
			<div className="sm:h-screen lg:h-[50rem] bg-cover" style={style}></div>
			<div className="container mx-auto">
				<div className="container mx-auto mt-36 flex flex-wrap items-center justify-between">
					<NewsItem title={title} subtitle={subtitle} body={body} categories={categories} postedDate={createdAt}  />
          <Author title={author.name} gravatar={author.gravatar} />
				</div>
			</div>
		</div>
	</Layout>
	);
}

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug[0]

  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
	_createdAt,
    title,
    subtitle,
    slug,
    summary,
    body,
    image,
    author-> {
      name,
      gravatar,
    },
    "categories": categories[]->{title},
  }`
  const post = await client.fetch(query, {slug})
  if (!post) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        subtitle: post.subtitle,
        body: post.body,
        image: post.image,
        author: post.author,
        categories: post.categories,
		    createdAt: post._createdAt,
      }
    }
  }
}

export default Post