import { render } from '@testing-library/react';
import React from 'react';
import Book from './Book';

describe('Book component', () => {
  const mockBook = {
    title: 'Test Book',
    authors: 'Test Author',
    shelf: 'wantToRead',
    imageLinks: {
      smallThumbnail: 'test-image.jpg',
    },
  };

  it('renders the book details', () => {
    const { getByText, getByAltText } = render(<Book book={mockBook} />);

    // Assert that the book title, authors, and cover image are rendered correctly
    const bookTitle = getByText(mockBook.title);
    expect(bookTitle).toBeInTheDocument();

    const bookAuthors = getByText(mockBook.authors);
    expect(bookAuthors).toBeInTheDocument();

    const bookCover = getByAltText(mockBook.title);
    expect(bookCover).toBeInTheDocument();
    expect(bookCover.getAttribute('src')).toEqual(
      mockBook.imageLinks.smallThumbnail
    );
  });
});
