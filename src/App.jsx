import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <div className='max-w-[70rem] my-8 mx-auto px-4 grid grid-cols-[256px_1fr] gap-8 items-start'>
        <aside>sidebar</aside>
        <main>
          <div>
            <h3>Título</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              error porro placeat perferendis quidem ipsam quasi aliquam
              inventore temporibus. Corrupti soluta exercitationem esse, minus
              fuga alias saepe ducimus consequuntur non.
            </p>
          </div>
          <div>
            <h3>Título</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              error porro placeat perferendis quidem ipsam quasi aliquam
              inventore temporibus. Corrupti soluta exercitationem esse, minus
              fuga alias saepe ducimus consequuntur non.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
