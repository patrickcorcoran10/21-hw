import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Book Search</Link>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved Books</Link>
        </nav>
    )
}