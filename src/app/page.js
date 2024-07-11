import React from "react";
import { getPosts, getUsers, getComments } from "@/libs/api";
import PostsList from "@/components/ui/posts/PostList";

const HomePage = async () => {
  const [posts, users, comments] = await Promise.all([getPosts(), getUsers(), getComments()]);

  return (
    <>
      <PostsList posts={posts} users={users} comments={comments} />
    </>
  );
};

export default HomePage;
