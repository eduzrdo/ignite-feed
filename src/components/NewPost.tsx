import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import { createPost } from '../services/post';

export const NewPost = () => {
  const [newPostText, setNewPostText] = useState('');
  const [tags, setTags] = useState('');
  const [posting, setPosting] = useState(false);

  const navigate = useNavigate();

  function handleNewPostTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value.trim() === '') {
      event.target.setCustomValidity(
        'Insira um texto válido antes de publicar!'
      );
    } else {
      event.target.setCustomValidity('');
    }

    setNewPostText(event.target.value);
  }

  function handleTagsChange(event: ChangeEvent<HTMLInputElement>) {
    setTags(event.target.value);
  }

  async function handleCreatePost(event: FormEvent) {
    event.preventDefault();
    if (posting) return;

    setPosting(true);

    const createdPost = await createPost({
      owner: '639bf1876870a4438cde5d16',
      text: newPostText,
      tags: tags.length > 0 ? tags.split(' ') : [],
    });

    navigate(`/${createdPost.owner.id}/post/${createdPost.id}`);
    setNewPostText('');
    setTags('');
    setPosting(false);
  }

  return (
    <div className='mt-4 p-4 rounded-lg bg-gray-800'>
      <form
        onSubmit={handleCreatePost}
        className='group'
      >
        <label className='block'>
          <strong className='leading-relaxed text-gray-100 text-sm'>
            Crie uma nova publicação
          </strong>
          <textarea
            placeholder='Escreva sua publicação aqui'
            className='w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4'
            name='comment'
            value={newPostText}
            onChange={handleNewPostTextChange}
            required
          />
        </label>

        <label className='block mt-2'>
          <strong className='text-sm'>Tags</strong>{' '}
          <span className='text-xs'>(opcional)</span>
          <input
            type='text'
            placeholder='Separadas por espaço'
            className='w-full bg-gray-900 border-0 resize-none p-4 rounded-lg text-gray-100 leading-snug mt-4'
            onChange={handleTagsChange}
            value={tags}
          />
        </label>

        <footer className='hidden group-focus-within:block'>
          <button
            type='submit'
            className={`flex justify-center w-full py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer ${
              posting ? 'cursor-not-allowed' : 'hover:bg-green-300'
            } transition-colors duration-100 focus:outline-none focus:shadow-none disabled:cursor-not-allowed disabled:opacity-70`}
          >
            {!posting && 'Publicar'}
            <HashLoader
              color='#FFFFFF'
              loading={posting}
              size={24}
              aria-label='Loading Spinner'
            />
          </button>
        </footer>
      </form>
    </div>
  );
};
