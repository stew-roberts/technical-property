import React from 'react'
import PropTypes from 'prop-types'

const Posts = (props) => {
  return (
    <div>
      <div 
        className="bg-[url('https://cdn.sanity.io/images/n0hhn4t2/production/120ead83582d8bde9bebd89b51844ec0a453e8b2-1950x705.jpg?w=2000&auto=format')] h-[20em] flex lg:h-[40rem] bg-cover bg-center">
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto lg:mt-36 flex flex-wrap items-center justify-between">
        {props.posts.map((post) => (
          <div key={post._id} className="sm:w-full h-[40rem] lg:w-[30rem] lg:h-[35rem] mt-8 overflow-hidden bg-white lg:border lg:border-gray-200 lg:shadow-md lg:dark:bg-gray-800 lg:dark:border-gray-700">
              <div className="lg:w-[30rem] lg:h-[17rem] overflow-hidden">
                <img className="" src={post.image && post.image.asset && post.image.asset.url} alt="{post.title}" />
              </div>
              <div className="p-5 lg:min-h-[15rem]">
                <div>
                  <h5 className="text-3xl font-medium text-black my-2">{post.title}</h5>
                  <p className="uppercase tracking-widest text-gray-500 mb-1 text-xs">{post.subtitle}</p>
                  <p className="">{post.summary}</p>
                </div>
              </div>
              <div className="block ml-5">
                  <a href={`post/detail/${post.slug.current}`} className=" text-white uppercase text-xs mt-8 border border-black px-8 py-3 w-44 bg-black hover:bg-white hover:text-black cursor-pointer">
                      Read more &rarr;
                  </a>
                </div>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}

Posts.PropTypes = {
  posts: PropTypes.array,
}

export default Posts