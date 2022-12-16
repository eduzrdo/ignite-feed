import { ChangeEvent, FormEvent, useState } from 'react';

export const NewPost = () => {
  const [newPostText, setNewPostText] = useState('');

  function handleNewPostTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewPostText(event.target.value);
  }

  function handleCreatePost(event: FormEvent) {
    event.preventDefault();
    console.log('create post\n', newPostText);
    setNewPostText('');
  }

  const isNewPostTextEmpty = newPostText.length === 0;

  return (
    <div className='mt-4 p-4 rounded-lg bg-gray-800'>
      <strong className='leading-relaxed text-gray-100'>
        Crie uma nova publicação
      </strong>
      <form
        onSubmit={handleCreatePost}
        className='group'
      >
        <textarea
          placeholder='Escreva sua publicação aqui'
          className='w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4'
          name='comment'
          value={newPostText}
          onChange={handleNewPostTextChange}
          // onInvalid={handleInvalidComment}
          required
        />

        <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-fit'>
          <button
            type='submit'
            disabled={isNewPostTextEmpty}
            className='w-full py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer [&:not(:disabled)]:hover:bg-green-300 transition-colors duration-100 focus:outline-none focus:shadow-none disabled:cursor-not-allowed disabled:opacity-70'
          >
            Publicar
          </button>
        </footer>
      </form>
    </div>
  );
};
