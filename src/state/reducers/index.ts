import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const reducers = combineReducers({
  book: bookReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
