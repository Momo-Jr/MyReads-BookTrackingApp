import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IBook, IShelf } from '../../models/Book';
import Shelf from './Shelf';

const mockShelf = {
  name: 'Test Shelf',
} as IShelf;

const mockBooks = [
  {
    id: '1',
    title: 'Book 1',
    authors: ['test author'],
    shelf: 'test-shelf',
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
  } as IBook,
  {
    id: '2',
    title: 'Book 2',
    authors: ['test author'],
    shelf: 'test-shelf',
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
  } as IBook,
];

const middlewares: any = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

const MockComponent = ({ shelf, books }: { shelf: IShelf; books: IBook[] }) => {
  return (
    <Provider store={store}>
      <Shelf shelf={shelf} books={books} />
    </Provider>
  );
};

describe('Shelf component', () => {
  it('renders the shelf name and books', () => {
    const { getByText } = render(
      <MockComponent shelf={mockShelf} books={mockBooks} />
    );

    const shelfName = getByText(mockShelf.name);
    expect(shelfName).toBeInTheDocument();

    mockBooks.forEach((book) => {
      const bookTitle = getByText(book.title);
      expect(bookTitle).toBeInTheDocument();
    });
  });
});
