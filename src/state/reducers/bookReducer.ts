import { IBook } from '../../models/Book';
import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState: IBook[] = [];

const reducer = (state: IBook[] = initialState, action: Action): IBook[] => {
  switch (action.type) {
    case ActionType.GetAll:
      return action.payload;
    case ActionType.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case ActionType.Searched:
      return action.payload;
    case ActionType.Want:
    case ActionType.Read:
    case ActionType.Current:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            shelf: action.type,
          };
        }
        return book;
      });
    case ActionType.SearchNull:
      return [];
    default:
      return state;
  }
};

export default reducer;
