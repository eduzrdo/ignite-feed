import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import { Error } from './Error';
import { Post, postLoader } from './Post';
import { PostsList, postsLoader } from './PostsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'inicio',
        element: <PostsList />,
        loader: postsLoader,
      },
      {
        path: ':userId/post/:postId',
        element: <Post />,
        loader: postLoader,
        // errorElement: <Error />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
