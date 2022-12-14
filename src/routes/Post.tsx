import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { api } from '../api';

import { PostItem, PostItemProps } from '../components/PostItem';

export const Post = () => {
  const data = useLoaderData() as PostItemProps;

  return (
    <main>
      <PostItem
        key={data.id}
        id={data.id}
        owner={data.owner}
        text={data.text}
        tags={data.tags}
        publishDate={data.publishDate}
        likes={data.likes}
        isLink={false}
      />
    </main>
  );
};

export async function postLoader({ params }: LoaderFunctionArgs) {
  const response = await api.get<PostItemProps>(`/post/${params.postId}`);
  return response.data;
}
