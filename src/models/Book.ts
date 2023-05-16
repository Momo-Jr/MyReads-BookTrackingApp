export interface IBook {
  id?: string;
  shelf: string;
  imageLinks: { smallThumbnail: string };
  title: string;
  authors: string[];
}
export interface IShelf {
  key: string;
  name: string;
}

export const shelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
];
