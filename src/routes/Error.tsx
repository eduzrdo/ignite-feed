import { Link, useRouteError } from 'react-router-dom';

import { Header } from '../components/Header';

export const Error = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.log(error);

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='max-w-[70rem] my-8 mx-auto px-4 text-center flex flex-col flex-1 justify-center items-center gap-4'>
        <h1 className='text-3xl font-bold'>Oops! 😟</h1>
        <p>Um erro inesperado aconteceu!</p>
        <p>
          Nossos desenvolvedores estão verificando o que aconteceu, e irão
          corrigir este erro em breve!
        </p>

        <Link
          to='inicio'
          className='p-4 rounded text-white bg-green-500 hover:bg-green-300 transition-colors duration-100'
        >
          Voltar para a página inicial
        </Link>
        {/* <p>{error.statusText || error.message}</p> */}
      </main>
    </div>
  );
};
