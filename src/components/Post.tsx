import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { ChatTeardropText, HandsClapping, Link } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';

import styles from './Post.module.css';
export interface Owner {
  id: string;
  firstName: string;
  lastName: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  picture: string;
}

export interface PostProps {
  id: string;
  owner: Owner;
  text: string;
  tags: string[];
  publishDate: string;
  likes: number;
  // image: string;
  // link: string;
}

export const Post = ({ owner, publishDate, text, tags, likes }: PostProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const date = new Date(publishDate);

  const formattedPublishedDate = format(date, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([newCommentText, ...comments]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string) {
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
          <Avatar src={owner.picture} />
          <div>
            <strong className='text-sm text-gray-100 leading-relaxed block'>
              {owner.firstName} {owner.lastName}
            </strong>
            <span className='text-xs text-gray-400 leading-relaxed'>
              {owner.title.toUpperCase()}
            </span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={date.toISOString()}
          className='text-sm text-gray-400'
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={`leading-relaxed mt-6 ${styles.content}`}>
        <p>{text}</p>
        <p className='flex gap-2'>
          {tags.map((tag) => (
            <a
              key={tag}
              href='#'
            >
              #{tag}
            </a>
          ))}
        </p>
      </div>

      <footer
        onSubmit={handleCreateNewComment}
        className='flex justify-around mt-6 pt-6 border-t border-gray-600 group'
      >
        <button
          onClick={() => {}}
          className='text-gray-400 cursor-pointer rounded flex items-center hover:text-green-300'
        >
          <HandsClapping className='w-6 h-6' />
          <span className='before:px-1 before:content-["\2022"]'>{likes}</span>
        </button>
        <button
          onClick={() => {}}
          className='text-gray-400 cursor-pointer rounded flex items-center hover:text-green-300'
        >
          <ChatTeardropText className='w-6 h-6' />
          <span className='before:px-1 before:content-["\2022"]'>0</span>
        </button>
        <button
          onClick={() => {}}
          className='text-gray-400 cursor-pointer rounded flex items-center hover:text-green-300'
        >
          <Link className='w-6 h-6' />
        </button>
      </footer>

      {/* <form
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
      </form> */}

      {/* {comments.length > 0 && (
        <div className='mt-2'>
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      )} */}
    </article>
  );
};
