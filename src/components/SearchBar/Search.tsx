import { Link } from 'react-router-dom';
import './Search.css';
function Search() {
  return (
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  );
}

export default Search;
