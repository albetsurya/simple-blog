async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

async function getPostById(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
}

async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

async function getComments() {
  const response = await fetch("https://dummyjson.com/comments");

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
}

export { getPosts, getPostById, getUsers, getComments };