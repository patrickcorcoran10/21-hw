export default function Search(props) {
    return (
        <>
        <input placeholder="here we search for books" onChange={props.handleBookInput}/>
        <button onClick={props.handleBookSubmit}>Submit</button>
        </>
    )
}