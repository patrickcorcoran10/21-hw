import React, {useContext} from 'react'
import {BookContext} from './BookContext';

export default function Search() {
    const context = useContext(BookContext);
    return (
        <>
        <input placeholder="here we search for books" onChange={context.handleBookInput}/>
        <button onClick={context.handleBookSubmit}>Submit</button>
        </>
    )
}