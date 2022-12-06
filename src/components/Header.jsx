import igniteLogo from '../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <header className='flex justify-center items-center gap-4 bg-gray-800 py-5'>
      <img
        src={igniteLogo}
        alt='Logotipo do Ignite'
        className='h-8'
      />
      <strong>Ignite Feed</strong>
    </header>
  );
};
