import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { api } from './api';
import { createUser, getUser } from './services/user';
import { createPost } from './services/post';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  useEffect(() => {
    // (async function () {
    //   const createdUser = await createUser({
    //     title: 'mr',
    //     firstName: 'Eduardo',
    //     lastName: 'Oliveira',
    //     gender: 'male',
    //     email: 'eduardoliveira.dev@gmail.com',
    //     dateOfBirth: new Date('1993-04-17 14:27:00'),
    //     phone: '+5532988887777',
    //     picture: 'https://github.com/EduardoAlphonse.png',
    //     location: {
    //       street: 'Av. Rio Branco, 1042',
    //       city: 'Juiz de Fora',
    //       state: 'Minas Gerais',
    //       country: 'Brasil',
    //       timezone: -3,
    //     },
    //   });
    //   console.log(createdUser);
    // })();
    // (async function () {
    //   const createdPost = await createPost({
    //     owner: '639bf1876870a4438cde5d16',
    //     text: "This is a test post I'm trying to create. I hope it works the first time! 😜",
    //     tags: ['test', 'post', 'weeee'],
    //   });
    //   console.log(createdPost);
    // })();
    // (async function () {
    //   const user = await getUser('639bf1876870a4438cde5d16');
    //   console.log(user);
    // })();
  }, []);

  return (
    <div>
      <Header />

      <div className='max-w-[70rem] my-8 mx-auto px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
