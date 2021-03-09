import Book from './Book.js'

export default function BookList (props) {
    console.log("on the list component", props.bookData)
    const displayList = props.bookData.length ? props.bookData.map(book => {
    return (
        <Book
            data={book}
        />
    
    )
    }
    ) : <p>No Books</p>

    return (
        <div>{displayList}</div>
    )
}