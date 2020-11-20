import React from 'react'

function ImageCard({ image }) {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-sm mb-3">
              Photo by
            <img src={image.userImageURL} alt="" className="rounded-full w-12 h-12 mt-4" />
          </div>
          <div className="font-bold text-blue-500 text-xl mb-5">
            {image.user}
          </div>
          <ul className="text-sm">
            <li>
              <strong> Views: </strong> {image.views}
            </li>
            <li>
              <strong> Download: </strong> {image.downloads}
            </li>
            <li>
              <strong> Likes: </strong> {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
            {tags.map( (tag, index) => (
            <span key={index} className="inline-block bg-gray-200 round-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag}
            </span>
            ))}
        </div>
      </div>
    )
}

export default ImageCard
