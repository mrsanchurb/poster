import { z } from "zod";
const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
const postsSchema = z.array(postSchema);

export const dataPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();

  //validation with zod
  const posts = postsSchema.parse(data);
  return posts;
};
export const singlePost = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await res.json();

  //validation with zod
  const post = postSchema.parse(data);
  return post;
};
