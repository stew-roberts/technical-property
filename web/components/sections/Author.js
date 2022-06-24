import React from 'react'

const Author = ({title, gravatar}) => {
    return (
        <div className="flex items-center mt-12">
            <img src={gravatar} className="rounded-full" alt={title} />
            <div className="flex flex-col ml-4">
                <span className="uppercase tracking-widest text-gray-500 text-xs">Posted by:</span>
                <span className="uppercase tracking-widest text-black text-xs">{title}</span>
            </div>
        </div>
    )
}
export default Author