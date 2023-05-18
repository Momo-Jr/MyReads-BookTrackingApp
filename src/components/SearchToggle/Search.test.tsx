import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';

describe('Search', () => {
  test('renders the "Add a book" link', () => {
    render(
      <Router>
        <Search />
      </Router>
    );

    const linkText = screen.getByText('Add a book');
    expect(linkText).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Add a book' });
    expect(link.getAttribute('href')).toBe('/search');
  });
});
