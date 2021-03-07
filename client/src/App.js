import './App.css';
import { useState, useEffect } from "react";
import Search from './components/Search'
import BookList from './components/BookList.js'
import bookData from './data/booksDummyData'

function App() {
  const [books, setBooks] = useState([]);
  console.log(bookData)
  useEffect(() => {
    console.log("effect")
    setBooks(bookData)
    console.log(books)
  }, [books])

  // On click to grab books
 
  return (
    <div className="App">
      <p>Book Search</p>
      <Search/>
      <BookList/>

    </div>
  );
}

export default App;
