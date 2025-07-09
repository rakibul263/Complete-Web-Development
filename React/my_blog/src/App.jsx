import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [disabled, setDisabled] = useState([]);
  const handelBookmark = (blog) => {
    // console.log(blog.title);
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);

    const newReadingTime = readingTime + blog.reading_time;
    setReadingTime(newReadingTime);
  
    document.getElementById(`blog-${blog.id}`).disabled = "true";
    setDisabled([...disabled, blog.id]);
  }

  const handelMarkAsRead = (blog) => {
    setReadingTime(readingTime - blog.reading_time);
    // blog.find(blog.title === bookmark.title)
    const updateBookmark = bookmark.filter(item => item.title !== blog.title);
    setBookmark(updateBookmark);
    document.getElementById(`btn-${blog.id}`).disabled = "false";
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center gap-2 max-w-[80%] mx-auto">
        <div className="left-container w-[70%]">
          <Blogs handelBookmark={handelBookmark} handelMarkAsRead={handelMarkAsRead} disabled={disabled}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time : {readingTime}</h1>
          <h1>Bookmark Count : {bookmark.length}</h1>
          {
            bookmark.map(item => <h2 className='p-4 shadow-2xl shadow-gray-200 rounded-2xl font-bold border-1 m-4 bg-gray-400'>{item.title}</h2>)
          }
        </div>
      </div>
    </>
  )
}

export default App
