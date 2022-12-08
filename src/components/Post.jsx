import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(['Post massinha demais, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const formattedPublishedDate = format(
    publishedAt,
    "d 'de' MMMM 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([newCommentText, ...comments]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleInvalidComment(event) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    const newComments = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(newComments);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={`bg-gray-800 rounded-lg p-10 ${styles.post}`}>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Avatar src={author.avatarUrl} />
          <div>
            <strong className='text-sm text-gray-100 leading-relaxed block'>
              {author.name}
            </strong>
            <span className='text-xs text-gray-400 leading-relaxed'>
              {author.role}
            </span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={publishedAt.toISOString()}
          className='text-sm text-gray-400'
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={`leading-relaxed mt-6 ${styles.content}`}>
        {content.map((line) => {
          switch (line.type) {
            case 'paragraph':
              return <p key={line.content}>{line.content}</p>;
            case 'link':
              return (
                <p key={line.content}>
                  <a href='#'>{line.content}</a>
                </p>
              );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className='w-full mt-6 pt-6 border-t border-gray-600 group'
      >
        <strong className='leading-relaxed text-gray-100'>
          Deixe seu feedback
        </strong>
        <textarea
          placeholder='Deixe um comentário'
          className='w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4'
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleInvalidComment}
          required
        />
        <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-fit'>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
            className='py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer [&:not(:disabled)]:hover:bg-green-300 transition-colors duration-100 focus:outline-none focus:shadow-none disabled:cursor-not-allowed disabled:opacity-70'
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className='mt-2'>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
