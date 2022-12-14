import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Post, Owner, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';

import { api } from './api';

interface PostResponse {
  data: PostProps[];
  limit: number;
  page: number;
  total: number;
}

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async function () {
      const response = await api.get<PostResponse>('/post');
      console.log(response.data.data);
      setPosts(response.data.data);
    })();
  }, []);

  return (
    <div>
      <Header />

      <div className='max-w-[70rem] my-8 mx-auto px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start'>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
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
      </div>
    </div>
  );
}

export default App;
