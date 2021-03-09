import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home.js'
import Saved from "./pages/Saved.js"
import Nav from './components/Nav.js'
import {BookContext} from './components/BookContext'
import {SaveBookFunctionContext} from './components/SaveBookFunctionContext'
import { useState, useEffect } from "react";
import axios from 'axios'



function App() {
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
  const handleBookSave = async id => {
    const bookSave = books.find(book => book.id === id);
    const info = {
      googleId: bookSave.id,
      title: bookSave.volumeInfo.title,
      description: bookSave.volumeInfo.subtitle,
      link: bookSave.volumeInfo.infoLink,
      authors: bookSave.volumeInfo.description,
      image: bookSave.volumeInfo.imageLinks.thumbnail
    };
    console.log(info)
    const response = await axios.post("/api/books", {
      method: "POST",
      body: info
    })
    const result = response.json()
    console.log(result)
  }
  const saveBook = e => {
      console.log("click", e.target.value)
      handleBookSave(e.target.value)
  }
  const props = {
    books: books,
    handleBookSubmit: handleBookSubmit,
    handleBookInput: handleBookInput
  }


  return (
    <BookContext.Provider
      value={props}
    >
    <SaveBookFunctionContext.Provider
      value={saveBook}
    >
    <Router>
      <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/saved" component={Saved}/>
    </Switch>
    </Router>
    </SaveBookFunctionContext.Provider>
    </BookContext.Provider>
  )
  
}

export default App;
