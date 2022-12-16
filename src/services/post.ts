import { api } from '../api';

import { UserPreview } from './user';

interface Post {
  text: string;
  // image: string;
  tags?: string[];
  owner: string;
}

interface PostResponse {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: UserPreview;
}

export async function createPost(post: Post) {
  const response = await api.post<PostResponse>('/post/create', post);
  return response.data;
}

export async function deletePost(postId: string) {
  const response = await api.delete<string>(`/post/${postId}`);
  return response.data;
}
