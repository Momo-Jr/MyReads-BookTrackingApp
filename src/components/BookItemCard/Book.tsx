import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove, update } from '../../BookAPI';
import { IBook } from '../../models/Book';
import { actionCreators } from '../../state';
import { removeBook } from '../../state/action-creators';
import './Book.css';

interface BookProps {
  book: IBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const dispatch = useDispatch();
  const { setShelf } = bindActionCreators(actionCreators, dispatch);

  const removeBookFromShelf = (bookToRemove: IBook) => {
    remove(bookToRemove.id);
    dispatch(removeBook(bookToRemove));
  };
  const selectShelfHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedShelf = event.target.value;

    if (selectedShelf === 'remove') {
      removeBookFromShelf(book);
    }

    setShelf(book, selectedShelf);
    updateSelectedBook(selectedShelf);
  };

  const updateSelectedBook = (shelf: string) => {
    update(book, shelf).then((updatedBook) => {
      console.log(updatedBook);
    });
  };
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
            }}
          >
            <img
              alt={book.title}
              id='bookImg'
              src={book.imageLinks.smallThumbnail}
            />
          </div>
          <div className='book-shelf-changer'>
            <select
              onChange={selectShelfHandler}
              id='selecteId'
              value={book.shelf}
            >
              <option selected disabled value='moveTo'>
                Move To
              </option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='remove'>Remove</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
