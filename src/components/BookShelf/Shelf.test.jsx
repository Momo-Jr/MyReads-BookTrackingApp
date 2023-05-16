import { render } from '@testing-library/react';
import React from 'react';
import Shelf from './Shelf';

const mockShelf = {
  name: 'Test Shelf',
};

const mockBooks = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
];

describe('Shelf component', () => {
  it('renders the shelf name and books', () => {
    const { getByText } = render(<Shelf shelf={mockShelf} books={mockBooks} />);

    const shelfName = getByText(mockShelf.name);
    expect(shelfName).toBeInTheDocument();

    mockBooks.forEach((book) => {
      const bookTitle = getByText(book.title);
      expect(bookTitle).toBeInTheDocument();
    });
  });
});
