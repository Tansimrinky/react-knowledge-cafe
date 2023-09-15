import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark =(blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    

  }
  const handleMarkAsRead = ( id, time) => {
    setReadingTime(readingTime + time)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <div className='max-w-6xl mx-auto my-4'>
      <Header></Header>
      <div className='md:flex '>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
