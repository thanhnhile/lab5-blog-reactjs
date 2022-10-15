
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import List from './components/List';
import PostDetail from './components/PostDetail';

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <header className='App-header'>
        <nav>
          <Link className='App-link' to="/">Home</Link>
          <Link className='App-link' to="/add">Add Post</Link>
        </nav>
      </header>
      <div className='content'>
        <Routes>
          <Route path="/" element={<List posts={posts} setPosts={setPosts} />}></Route>
          <Route path="/:id" element={<PostDetail posts={posts} setPosts={setPosts} />}></Route>
          <Route path="/add" element={<AddPost setPosts={setPosts} />}></Route>
          <Route path="/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
