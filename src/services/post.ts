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
