import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAll } from '../BookAPI';
import Shelf from '../components/BookShelf/Shelf';
import NavBar from '../components/NavigationBar/NavBar';
import Search from '../components/SearchToggle/Search';
import { IBook, IShelf, shelves } from '../models/Book';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers';
import './Home.css';
function Home() {
  const AllBooks = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();
  const { getAllBooks } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getAll().then((books) => {
      getAllBooks(books);
    });
  }, []);

  function booksOnShelf(shelf: IShelf) {
    return AllBooks.filter((book: IBook) => book.shelf === shelf.key);
  }

  return (
    <div className='list-books'>
      <NavBar />
      <div className='list-books-content'>
        <div>
          {shelves.map((shelf) => (
            <Shelf key={shelf.key} shelf={shelf} books={booksOnShelf(shelf)} />
          ))}
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Home;
