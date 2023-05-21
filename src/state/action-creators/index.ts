import { Dispatch } from 'redux';
import { IBook } from '../../models/Book';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addWantToRead =
  (payload: IBook) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Want,
      payload,
    });
  };

export const addRead = (payload: IBook) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Read,
    payload,
  });
};

export const addCurrentlyReading =
  (payload: IBook) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Current,
      payload,
    });
  };
export const removeBook = (book: IBook): Action => {
  return {
    type: ActionType.REMOVE_BOOK,
    payload: book,
  };
};

export const getAllBooks =
  (payload: IBook[]) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GetAll,
      payload,
    });
  };

export const getSearched =
  (payload: IBook[]) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Searched,
      payload,
    });
  };

export const emptySearch = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SearchNull,
    payload: [],
  });
};

export const setShelf =
  (payload: any, shelfName: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: shelfName,
      payload,
    });
  };
