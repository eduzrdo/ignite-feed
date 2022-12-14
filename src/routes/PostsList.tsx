import { useLoaderData } from 'react-router-dom';

import { PostItem, PostItemProps } from '../components/PostItem';

import { api } from '../api';

interface PostResponse {
  data: PostItemProps[];
  limit: number;
  page: number;
  total: number;
}

export const PostsList = () => {
  const { data } = useLoaderData() as PostResponse;

  return (
    <main>
      {data.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          owner={post.owner}
          text={post.text}
          tags={post.tags}
          publishDate={post.publishDate}
          likes={post.likes}
        />
      ))}
    </main>
  );
};

export async function postsLoader() {
  const response = await api.get<PostResponse>('/post');
  return response.data;
}
