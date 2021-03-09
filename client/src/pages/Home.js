import Search from '../components/Search'
import BookList from '../components/BookList.js'

export default function Home() {
  return (
    <div className="App">
      <p>Book Search</p>
      <Search />
      <BookList/>
    </div>
  );
    
}