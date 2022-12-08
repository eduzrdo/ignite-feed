import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

export const Comment = ({ content, onDeleteComment }) => {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className='mt-6 flex gap-4'>
      <Avatar
        hasBorder={false}
        src='https://github.com/EduardoAlphonse.png'
      />

      <div className='flex-1'>
        <div className='bg-gray-700 rounded-lg p-4'>
          <header className='flex justify-between items-start'>
            <div>
              <strong className='leading-relaxed block'>Eduardo Afonso</strong>
              <time
                title='11 de Maio às 08:13h'
                dateTime='2022-05-11 08:13:32'
                className='text-sm text-gray-400'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title='Deletar comentário'
              onClick={handleDeleteComment}
              className='cursor-pointer rounded hover:text-red-500'
            >
              <Trash className='w-6 h-6' />
            </button>
          </header>

          <p className='mt-4'>{content}</p>
        </div>

        <footer className='mt-4'>
          <button className='text-gray-400 cursor-pointer rounded flex items-center hover:text-green-300'>
            <ThumbsUp className='mr-[10px] w-6 h-6' />
            Aplaudir{' '}
            <span className='before:px-1 before:content-["\2022"]'>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
