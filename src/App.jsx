import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className='max-w-[70rem] my-8 mx-auto px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start'>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;