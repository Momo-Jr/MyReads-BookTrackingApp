import { IBook, IShelf } from '../../models/Book';
import Book from '../BookItemCard/Book';
import './Shelf.css';

interface ShelfProps {
  shelf: IShelf;
  books: IBook[];
}

const Shelf: React.FC<ShelfProps> = ({ shelf, books }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
