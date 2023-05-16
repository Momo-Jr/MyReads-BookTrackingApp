import { IBook, IShelf } from '../../models/Book';
import Book from '../BookItemCard/Book';
import './Shelf.css';

function Shelf(props: { shelf: IShelf; books: IBook[]; key: string }) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.shelf.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
