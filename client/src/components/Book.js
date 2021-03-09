export default function Book(props) {
    
    return (
    <div>
        <br/>
        <img alt={props.data.id} src={props.data.volumeInfo.imageLinks.thumbnail}/>
        <h5>{props.data.volumeInfo.title}</h5>
        <p>by: {props.data.volumeInfo.authors.join(", ")}</p>
        <p>{props.data.searchInfo.textSnippet}</p>
        <a href={props.data.volumeInfo.previewLink}>Link</a>
        <br/>
        <button>Save</button>
    </div>
    )
}