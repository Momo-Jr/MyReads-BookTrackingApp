import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState: any[] = [];

const reducer = (state = initialState, action: Action): any => {
  if (action.type === ActionType.GetAll) {
    if (state.length === 0) {
      return [...state, ...action.payload];
    } else {
      state = [];
      return [...state, ...action.payload];
    }
  } else if (action.type === ActionType.Searched) {
    if (state.length > 0) {
      state = [];
      state = [...state, ...action.payload];
    } else {
      state = [...state, ...action.payload];
    }
    return state;
  } else if (action.type === ActionType.Want) {
    return [
      ...state.filter((book) => book.id !== action.payload.id),
      {
        ...action.payload,
        shelf: ActionType.Want,
      },
    ];
  } else if (action.type === ActionType.Read) {
    return [
      ...state.filter((book) => book.id !== action.payload.id),
      {
        ...action.payload,
        shelf: ActionType.Read,
      },
    ];
  } else if (action.type === ActionType.Current) {
    return [
      ...state.filter((book) => book.id !== action.payload.id),
      {
        ...action.payload,
        shelf: ActionType.Current,
      },
    ];
  } else if (action.type === ActionType.SearchNull) {
    return (state = []);
  } else {
    return state;
  }
};

export default reducer;
