import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addWantToRead = (payload: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Want,
    payload: payload,
  });
};

export const addRead = (payload: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Read,
    payload: payload,
  });
};

export const addCurrentlyReading =
  (payload: any) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Current,
      payload: payload,
    });
  };

export const getAllBooks = (payload: []) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GetAll,
    payload: payload,
  });
};

export const getSearched = (payload: []) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.Searched,
    payload: payload,
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
      payload: payload,
    });
  };
