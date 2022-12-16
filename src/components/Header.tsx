import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='flex justify-center bg-gray-800 py-5'>
      <Link
        to='/inicio'
        className='flex justify-center items-center gap-4 group focus:shadow-none'
      >
        <img
          src='/ignite-logo.svg'
          alt='Logotipo do Ignite'
          className='h-8'
        />
        <strong className='group-hover:text-white transition-colors duration-100'>
          Ignite Feed
        </strong>
      </Link>
    </header>
  );
};
