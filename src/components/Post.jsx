import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={`bg-gray-800 rounded-lg p-10 ${styles.post}`}>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img
            src='https://github.com/EduardoAlphonse.png'
            className='w-12 h-12 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500 box-content'
          />
          <div>
            <strong className='text-gray-100 leading-relaxed block'>
              Eduardo Afonso
            </strong>
            <span className='text-sm text-gray-400 leading-relaxed'>
              Web Developer
            </span>
          </div>
        </div>

        <time
          title='11 de Maio às 08:13h'
          dateTime='2022-05-11 08:13:32'
          className='text-sm text-gray-400'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={`leading-relaxed text-gray-300 mt-6 ${styles.content}`}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href='#'>👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a> <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className='w-full mt-6 pt-6 border-t border-gray-600 group'>
        <strong className='leading-relaxed text-gray-100'>
          Deixe seu feedback
        </strong>
        <textarea
          placeholder='Deixe um comentário'
          className='w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4'
        />
        <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-fit'>
          <button
            type='submit'
            className='py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer hover:bg-green-300 transition-colors duration-100'
          >
            Publicar
          </button>
        </footer>
      </form>
    </article>
  );
};
