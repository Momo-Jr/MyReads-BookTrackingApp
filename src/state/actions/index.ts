import { ActionType } from '../action-types/index';

interface WantToReadAction {
  type: ActionType.Want;
  payload: {
    shelf?: string;
  };
}

interface ReadAction {
  type: ActionType.Read;
  payload: {
    shelf?: string;
  };
}

interface CurrentlyReadingAction {
  type: ActionType.Current;
  payload: {
    shelf?: string;
  };
}

interface GetAllBooksAction {
  type: string;
  payload: any;
}

export type Action =
  | WantToReadAction
  | ReadAction
  | CurrentlyReadingAction
  | GetAllBooksAction;
