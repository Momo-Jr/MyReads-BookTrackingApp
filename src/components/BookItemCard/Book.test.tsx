import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IBook } from '../../models/Book';
import Book from './Book';

const middlewares: any = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

const MockComponent = ({ book }: { book: IBook }) => {
  return (
    <Provider store={store}>
      <Book book={book} />
    </Provider>
  );
};

describe('Book component', () => {
  const mockBook = {
    title: 'Test Book',
    authors: ['Test Author'],
    shelf: 'wantToRead',
    imageLinks: {
      smallThumbnail: 'test-image.jpg',
    },
  } as IBook;

  it('renders the book details', () => {
    const { getByText, getByAltText } = render(
      <MockComponent book={mockBook} />
    );

    // Assert that the book title, authors, and cover image are rendered correctly
    const bookTitle = getByText(mockBook.title);
    expect(bookTitle).toBeInTheDocument();

    const bookAuthors = getByText(mockBook.authors[0]);
    expect(bookAuthors).toBeInTheDocument();

    const bookCover = getByAltText(mockBook.title);
    expect(bookCover).toBeInTheDocument();
    expect(bookCover.getAttribute('src')).toEqual(
      mockBook.imageLinks.smallThumbnail
    );
  });
});
