import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from './Home';

describe('Home Component', () => {
  const mockStore = configureStore([]);
  const initialState = {
    book: [], // Initial state of the book slice
  };
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    // Assertion code here (if necessary)
  });
});
