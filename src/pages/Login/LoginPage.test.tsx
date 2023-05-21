import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('renders without errors', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  });
});
