import { PencilSimpleLine } from 'phosphor-react';

import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className='bg-gray-800 rounded-lg overflow-hidden'>
      <img
        src='https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        className='w-full h-[72px] object-cover'
      />

      <div className='flex flex-col items-center mt-[-1.5rem]'>
        <Avatar src='https://github.com/EduardoAlphonse.png' />
        <strong className='mt-4 text-gray-100 leading-relaxed'>
          Eduardo Afonso
        </strong>
        <span className='text-sm text-gray-400 leading-relaxed'>
          Web Developer
        </span>
      </div>

      <footer className='border-t border-gray-600 mt-5 pt-6 px-8 pb-8'>
        <a
          href='#'
          className='w-full bg-transparent text-green-500 border border-green-500 rounded-lg h-[50px] px-6 font-bold flex justify-center items-center gap-2 hover:bg-green-500 hover:text-white transition-colors duration-100'
        >
          <PencilSimpleLine
            size={20}
            weight='bold'
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
