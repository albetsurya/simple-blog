import PostDetail from '@/components/ui/posts/PostDetail';
import React from 'react'
import { getPostById, getUsers, getComments } from "@/libs/api";



const postPage = async ({ params: { id } }) => {
  const [post, users, comments] = await Promise.all([getPostById(id), getUsers(), getComments()]);

  return (
    <>
      <PostDetail post={post} users={users} comments={comments}/>
    </>
  );
};

export default postPage