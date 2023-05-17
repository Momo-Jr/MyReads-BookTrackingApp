import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IShelf } from '../../models/Book';
import { store } from '../../state';
import Shelf from '../BookShelf/Shelf';

describe('Shelf Component Test', () => {
  test('test rendering books', () => {
    const bookData = [
      {
        id: 'testid',
        authors: ['test author'],
        shelf: 'testshelf',
        title: 'test title',
        imageLinks: { smallThumbnail: 'test path' },
      },
    ];
    const shelf: IShelf = { key: 'read', name: 'Read' };
    render(
      <Provider store={store}>
        <Shelf books={bookData} key={shelf.key} shelf={shelf} />
      </Provider>
    );
    const renderElement = screen.getByText('Move To');
    expect(renderElement).toBeInTheDocument();
  });
});
