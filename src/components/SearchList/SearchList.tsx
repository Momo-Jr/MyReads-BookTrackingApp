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

export const SearchList: React.FC = () => {
  const filteredBooks: IBook[] = useSelector((state: RootState) => state.book);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { getSearched, emptySearch } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
    if (value !== '') {
      BookApis.search(value, 20)
        .then((filteredBooks) => {
          getSearched(filteredBooks);
        })
        .catch(() => {
          emptySearch();
        });
    } else {
      emptySearch();
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
            onChange={handleChange}
            value={message}
            placeholder='What are you looking for?'
          />
        </div>
      </div>
      <div>
        <div className='books-grid'>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <Book key={book.id} book={book} />)
          ) : (
            <div className='error-div'>
              <h1>Couldn't find entered books</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchList;
