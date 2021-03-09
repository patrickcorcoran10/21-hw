import Book from './Book.js'
import {BookContext} from '../components/BookContext'
import React, {useContext} from 'react'

export default function BookList () {
    const context = useContext(BookContext)
    const displayList = context.books.length ? context.books.map((book, index) => {
    return (
        <div key={index}>
        <Book/>
        </div>
    )
    }
    ) : <p>No Books</p>

    return (
        <div>{displayList}</div>
    )
}