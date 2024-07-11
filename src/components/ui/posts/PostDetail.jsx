"use client";

import React, { useEffect, useState } from "react";
import PostDetailLoading from "@/components/ui/loading/PostDetailLoading";
import Reactions from "@/components/ui/posts/Reactions";

const PostDetail = ({ post, users, comments }) => {
  const [userNames, setUserNames] = useState({});
  const [userImages, setUserImages] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const [visibleComments, setVisibleComments] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userNameMap = {};
    const userImageMap = {};
    users.users.forEach((user) => {
      userNameMap[user.id] = `${user.firstName} ${user.lastName}`;
      userImageMap[user.id] = user.image;
    });
    setUserNames(userNameMap);
    setUserImages(userImageMap);
  }, [users]);

  useEffect(() => {
    const filteredComments = comments.comments.filter(
      (comment) => comment.postId === post.id
    );
    setCommentsList(filteredComments);
    setIsLoading(false);
  }, [comments, post.id]);

  const loadMoreComments = () => {
    setVisibleComments((prevVisibleComments) =>
      Math.min(prevVisibleComments + 3, commentsList.length)
    );
  };

  const showLessComments = () => {
    setVisibleComments(3);
  };

  const scrollToComments = () => {
    document.getElementById("comments").scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <PostDetailLoading />;
  }

  return (
    <div className="flex flex-row justify-center md:justify-end lg:justify-center md:pt-10 ">
      <Reactions
        post={post}
        commentsList={commentsList}
        scrollToComments={scrollToComments}
      />
      <div className="flex flex-col gap-4 bg-gray-900 text-white w-[700px] md:mx-4 lg:mx-auto border border-gray-700 md:rounded-lg">
        <div className="flex flex-col gap-4 py-12 px-5 md:px-10">
          <div className="flex flex-row">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 hover:bg-gray-600 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h3 className="text-5xl font-bold mb-2">{post.title}</h3>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center ">
              {userImages[post.userId] && (
                <img
                  src={userImages[post.userId]}
                  alt={`${userNames[post.userId]}'s avatar`}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <p className="text-gray-400">
                {userNames[post.userId] ? userNames[post.userId] : "Unknown"}
              </p>
            </div>
          </div>
          <p className="text-gray-300 pb-5 text-justify">{post.body}</p>
        </div>
        <hr className="border-gray-600 w-full" />
        <div id="comments" className="px-5 md:px-10 pb-10">
          <h4 className="text-2xl font-bold mb-4">Comments</h4>
          <div>
            {commentsList.slice(0, visibleComments).map((comment) => (
              <div key={comment.id} className="flex flex-col gap-2">
                <p className="text-gray-300 font-semibold">
                  {comment.user.fullName}
                </p>
                <p className="text-gray-400 px-5 py-3 border border-gray-600 rounded-md">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
          {visibleComments < commentsList.length && (
            <button
              onClick={loadMoreComments}
              className="bg-white hover:bg-gray-200 text-gray-800 hover:text-black  px-4 py-2 rounded mt-2"
            >
              Load more
            </button>
          )}
          {visibleComments > 3 && (
            <button
              onClick={showLessComments}
              className="bg-white hover:bg-gray-200 text-gray-800 hover:text-black px-4 py-2 rounded mt-2 ml-2"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
