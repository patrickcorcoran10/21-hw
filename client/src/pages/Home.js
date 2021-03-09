import { useState, useEffect } from "react";
import Search from '../components/Search'
import BookList from '../components/BookList.js'
// import bookData from './data/booksDummyData'
import axios from 'axios'

export default function Home() {
    
        const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("")
  useEffect(() => {
    console.log("effect books",books)
  }, [books])

  // On click to grab books
  const handleBookInput = e => {
    setSearchBook(e.target.value)
  }
  const handleBookSubmit = e => {
    console.log("click", searchBook)
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchBook).then(results => {
      setBooks(results.data.items)
    })
    setSearchBook("")

  }
 
  return (
    <div className="App">
      <p>Book Search</p>
      <Search 
      handleBookInput={handleBookInput}
      handleBookSubmit={handleBookSubmit}
      />
      <BookList
        bookData={books}
      />

    </div>
  );
    
}