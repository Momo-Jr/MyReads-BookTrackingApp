import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addWantToRead = (payload: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Want,
    payload,
  });
};

export const addRead = (payload: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Read,
    payload,
  });
};

export const addCurrentlyReading =
  (payload: any) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Current,
      payload,
    });
  };

export const getAllBooks = (payload: any[]) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GetAll,
    payload,
  });
};

export const getSearched = (payload: any[]) => (dispatch: Dispatch<Action>) => {
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
