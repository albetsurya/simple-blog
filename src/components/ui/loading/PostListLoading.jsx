import React from 'react'

const PostListLoading = (key) => {
  return (
      <div
        key={key}
        className="flex flex-col justify-between max-w-sm p-6 h-[19rem] bg-gray-800 border border-gray-700 rounded-lg shadow mb-4 animate-pulse"
      >
        <div className="flex flex-col gap-3">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-2/3 mb-2"></div>
        </div>
        <div className="flex items-center justify-between text-sm mt-4">
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-4 bg-gray-700 rounded w-6"></div>
            <div className="h-4 bg-gray-700 rounded w-6"></div>
            <div className="h-4 bg-gray-700 rounded w-6"></div>
          </div>
        </div>
      </div>
  );
}

export default PostListLoading