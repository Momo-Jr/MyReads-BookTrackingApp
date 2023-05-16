import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as BookApis from '../../BookAPI';
import { IBook } from '../../models/Book';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';
import Book from '../BookItemCard/Book';
import './SearchList.css';

const SearchList: React.FC = () => {
  const booksFound: IBook[] = useSelector((state: RootState) => state.book);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { getSearched, emptySearch } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const searchBooksHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
    if (value !== '') {
      BookApis.search(value, 20)
        .then((booksFound) => {
          getSearched(booksFound);
        })
        .catch(() => {
          emptySearch();
        });
    } else {
      emptySearch();
    }
  };

  const renderBooks = () => {
    if (booksFound.length > 0) {
      return booksFound.map((book) => <Book key={book.id} book={book} />);
    } else {
      return (
        <div className='error-div'>
          <h1>Couldn't find entered inquiry</h1>
        </div>
      );
    }
  };

  return (
    <>
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <input
            type='text'
            id='message'
            name='message'
            onChange={searchBooksHandler}
            value={message}
            placeholder='What are you trying to find?'
          />
        </div>
      </div>
      <div>
        <div className='books-grid'>{renderBooks()}</div>
      </div>
    </>
  );
};

export default SearchList;
