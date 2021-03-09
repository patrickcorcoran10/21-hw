import {SaveBookFunctionContext} from '../components/SaveBookFunctionContext'
import {BookContext} from '../components/BookContext'
import React, {useContext} from "react";
export default function Book() {
    const context = useContext(BookContext);
    const saveBookContext = useContext(SaveBookFunctionContext);
    console.log(context)
    const bookDisplay = context.books.map((book, index) => {
        return(
        <div key={book.id}>
        <br/>
        <img alt={book.id} src={book.volumeInfo.imageLinks.thumbnail}/>
        <h5>{book.volumeInfo.title}</h5>
        <p>by: {book.volumeInfo.authors.join(", ")}</p>
        <p>{book.searchInfo.textSnippet}</p>
        <a href={book.volumeInfo.previewLink}>Link</a>
        <br/>
        <button value={book.id} onClick={saveBookContext}>Save</button>
    </div>
        )
    })
    return (
        <div>
        {bookDisplay}
        </div>
    
    )
}