import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  return (
    <>
      <div className='max-w-6xl mx-auto my-4'>
      <Header></Header>
      <div className='md:flex '>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
