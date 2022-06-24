import React from 'react'
import SimpleBlockContent from '../SimpleBlockContent'

import Tag from './Tag'

const NewsItem = ({title,subtitle,body,categories,postedDate}) => {
    postedDate = new Date(postedDate)
    return(
        <div>
            <div>
                <p className="uppercase tracking-widest text-gray-500 mb-1 text-xs">posted {postedDate.toDateString()}</p>
            </div>
            <p className="uppercase tracking-widest text-gray-500 mb-1 text-xs">{subtitle}</p>
            <h1 className="text-5xl font-medium text-black my-2">{title}</h1>
            <SimpleBlockContent blocks={body} />
            <div className="w-full flex border-gray-300">
                {categories.map((category) => (
                    <>
                        {category && <Tag title={category.title} />}
                    </>
                ))}
            </div>
        </div>
    )
}

export default NewsItem