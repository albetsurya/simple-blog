import React from "react";

const PostDetailLoading = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-900 text-white max-w-3xl mx-auto border border-gray-700 rounded-lg p-10 mt-10">
      <div className="animate-pulse">
        <div className="flex flex-row gap-4 items-center mb-8">
          <div className="bg-gray-700 rounded-full w-40 h-4"></div>
        </div>
        <div className="h-24 bg-gray-700 rounded mb-8"></div>
        <div className="flex flex-row items-center gap-4 mb-4">
          <div className="bg-gray-700 rounded-full w-8 h-4"></div>
          <div className="bg-gray-700 rounded-full w-20 h-4"></div>
        </div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded mt-2 w-full"></div>
        <div className="h-4 bg-gray-700 rounded mt-2 w-full"></div>
        <div className="h-4 bg-gray-700 rounded mt-2 w-full"></div>
        <div className="h-4 bg-gray-700 rounded mt-2 w-full"></div>
      </div>
      <div className="animate-pulse flex flex-col gap-2 mt-7">
        <div className="h-8 bg-gray-700 rounded w-1/3"></div>
        <div className="h-8 bg-gray-700 rounded w-full"></div>
        <div className="h-8 bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
};

export default PostDetailLoading;
