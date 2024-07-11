"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PostListLoading from "@/components/ui/loading/PostListLoading";

const PostsList = ({ posts, users, comments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const router = useRouter();
  const [userNames, setUserNames] = useState({});
  const [userImages, setUserImages] = useState({});
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [commentsList, setCommentsList] = useState([]);
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.posts.slice(indexOfFirstPost, indexOfLastPost);
    setDisplayedPosts(currentPosts);
    setTotalPages(Math.ceil(posts.posts.length / postsPerPage));
    setIsLoading(false);
  }, [users, posts, currentPage]);

  useEffect(() => {
    const filteredComments = posts.posts.map((post) => ({
      postId: post.id,
      comments: comments.comments.filter(
        (comment) => comment.postId === post.id
      ),
    }));
    setCommentsList(filteredComments);
  }, [comments, posts]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsLoading(true); 
  };

  const handleCardClick = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <div className=" px-4 py-6 lg:px-32 md:py-10 bg-black text-white">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
        {isLoading
          ? Array.from({ length: postsPerPage }).map((_, index) => (
              <PostListLoading key={index} />
            ))
          : displayedPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleCardClick(post.id)}
                className="flex flex-col justify-between max-w-[25rem] p-6 h-[19rem] bg-gray-800 border border-gray-700 rounded-lg shadow mb-4 cursor-pointer transform transition-transform hover:scale-[1.02]"
              >
                <div className="flex flex-col gap-3">
                  <h5 className="h-16 text-2xl font-bold text-justify tracking-tight text-white line-clamp-2">
                    {post.title}
                  </h5>

                  <div className="flex flex-wrap">
                    {post.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 hover:bg-gray-600 mb-2"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                  <p className="mb-3 font-normal text-sm text-justify text-gray-400 line-clamp-3">
                    {post.body}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex gap-2 items-center">
                    {userImages[post.userId] && (
                      <Image
                        src={userImages[post.userId]}
                        alt={`${userNames[post.userId]}'s avatar`}
                        className="w-6 h-6 rounded-full"
                        width={25}
                        height={25}
                      />
                    )}
                    <p
                      className={` ${
                        userNames[post.userId] ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {userNames[post.userId]
                        ? userNames[post.userId]
                        : "Unknown"}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center text-white">
                    <div className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="hover:text-red-400 transition-colors"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                      </svg>
                      <span>{post.reactions.likes}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className=""
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.821 4.91c3.899 -2.765 9.468 -2.539 13.073 .535c3.667 3.129 4.168 8.238 1.152 11.898c-2.841 3.447 -7.965 4.583 -12.231 2.805l-.233 .101l-4.374 .931l-.04 .006l-.035 .007h-.018l-.022 .005h-.038l-.033 .004l-.021 -.001l-.023 .001l-.033 -.003h-.035l-.022 -.004l-.022 -.002l-.035 -.007l-.034 -.005l-.016 -.004l-.024 -.005l-.049 -.016l-.024 -.005l-.011 -.005l-.022 -.007l-.045 -.02l-.03 -.012l-.011 -.006l-.014 -.006l-.031 -.018l-.045 -.024l-.016 -.011l-.037 -.026l-.04 -.027l-.002 -.004l-.013 -.009l-.043 -.04l-.025 -.02l-.006 -.007l-.056 -.062l-.013 -.014l-.011 -.014l-.039 -.056l-.014 -.019l-.005 -.01l-.042 -.073l-.007 -.012l-.004 -.008l-.007 -.012l-.014 -.038l-.02 -.042l-.004 -.016l-.004 -.01l-.017 -.061l-.007 -.018l-.002 -.015l-.005 -.019l-.005 -.033l-.008 -.042l-.002 -.031l-.003 -.01v-.016l-.004 -.054l.001 -.036l.001 -.023l.002 -.053l.004 -.025v-.019l.008 -.035l.005 -.034l.005 -.02l.004 -.02l .018 -.06l.003 -.013l1.15 -3.45l-.022 -.037c-2.21 -3.747 -1.209 -8.391 2.413 -11.119z" />
                      </svg>
                      <span>
                        {commentsList.find(
                          (commentItem) => commentItem.postId === post.id
                        )?.comments.length || 0}
                      </span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className=""
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                      </svg>
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded  hover:bg-gray-300 hover:text-black ${
              currentPage === index + 1 ? "bg-gray-500 text-gray-200" : "bg-white text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
